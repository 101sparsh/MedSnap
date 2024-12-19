import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const AudioInput = () => {
  const [transcript, setTranscript] = useState("");
  const [qrData, setQrData] = useState("");

  const generateQRCode = () => {
    setQrData(transcript);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Audio Health Input</h2>
      <div className="mb-4">
        <label
          htmlFor="transcript"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Transcript:
        </label>
        <input
          type="text"
          id="transcript"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder="Type or speak your health details..."
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <button
        onClick={generateQRCode}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate QR Code
      </button>
      {qrData && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Generated QR Code:</h3>
          <div className="flex justify-center">
            <QRCodeCanvas value={qrData} size={200} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioInput;

