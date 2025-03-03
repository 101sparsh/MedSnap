import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center p-6 mt-6">
      <p className="text-sm mb-4">
        MedSnap simplifies the process of accessing and managing healthcare data.
        With features like QR code scanning and audio input, we ensure that
        medical information is accessible and secure.
      </p>
      <p className="text-xs">
        &copy; 2024 MedSnap. All rights reserved. | <a href="#" className="text-accent">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;

