import React, { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css'

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter Your Value Here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="qr-code">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
