import React from "react";

const PatientForm = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Patient Form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Allergies:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Enter allergies"
          />
        </div>
        <button className="bg-accent text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;

