import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-white p-6">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to MedSnap</h1>
        <p className="text-lg font-light text-center max-w-2xl">
          MedSnap provides quick and seamless access to medical records using
          QR codes. Simplify healthcare with advanced tools for data sharing
          and management.
        </p>
      </div>
    </header>
  );
};

export default Header;

