import React, { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = () => {
  const [scannedData, setScannedData] = useState("");

  const startScanner = () => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render(
      (decodedText) => {
        setScannedData(decodedText);
        scanner.clear();
      },
      (error) => console.error("Error:", error)
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">QR Code Scanner</h2>
      <div
        id="reader"
        className="border border-gray-300 p-4 rounded mb-4"
        style={{ width: "100%", minHeight: "250px" }}
      ></div>
      <button
        onClick={startScanner}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Scanning
      </button>
      {scannedData && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Scanned Data:</h3>
          <p className="bg-gray-100 p-2 rounded border">{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;

