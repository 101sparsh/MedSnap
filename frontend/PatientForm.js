import React, { useState } from "react";

const PatientForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [allergies, setAllergies] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Patient Details:\nName: ${name}\nDOB: ${dob}\nAllergies: ${allergies}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Patient Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
            Allergies:
          </label>
          <input
            type="text"
            id="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            placeholder="Enter allergies"
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;

