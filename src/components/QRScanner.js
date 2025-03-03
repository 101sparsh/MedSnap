import React, { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = () => {
  const [qrData, setQrData] = useState("");

  const handleScan = (decodedText) => {
    setQrData(decodedText);
    console.log("Scanned QR Code Data:", decodedText);
  };

  React.useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
    scanner.render(handleScan, console.error);

    return () => scanner.clear();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>
      <div id="qr-reader" style={{ width: "300px" }}></div>
      <div>
        <h3>Scanned Data:</h3>
        <p>{qrData || "No QR code scanned yet."}</p>
      </div>
    </div>
  );
};

export default QRScanner;

