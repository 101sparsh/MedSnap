const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  criticalData: {
    allergies: [String],
    medications: [String],
    chronicConditions: [String],
  },
  qrCodeId: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('Patient', PatientSchema);


