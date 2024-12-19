import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const AudioInput = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [qrData, setQrData] = useState("");

  let recognition;

  if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      console.log("Speech result:", speechResult);
      setTranscript(speechResult);
      setQrData(speechResult);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };
  } else {
    console.error("Web Speech API is not supported in this browser.");
  }

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Audio Health Input</h2>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <div>
        <h3>Transcript:</h3>
        <p>{transcript || "No input yet..."}</p>
      </div>
      {qrData && (
        <div>
          <h3>Generated QR Code:</h3>
          <QRCodeCanvas value={qrData} />
        </div>
      )}
    </div>
  );
};

export default AudioInput;

