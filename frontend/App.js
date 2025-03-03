import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PatientForm from "./components/PatientForm";
import QRScanner from "./components/QRScanner";
import AudioInput from "./components/AudioInput";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <PatientForm />
        <QRScanner />
        <AudioInput />
      </main>
      <Footer />
    </div>
  );
};

export default App;

