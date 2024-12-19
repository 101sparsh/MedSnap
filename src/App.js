import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PatientForm from "./components/PatientForm";
import QRScanner from "./components/QRScanner";
import AudioInput from "./components/AudioInput";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <PatientForm />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <QRScanner />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 col-span-full">
            <AudioInput />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

