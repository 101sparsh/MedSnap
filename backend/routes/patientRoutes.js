const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Route to add a patient
router.post('/add', async (req, res) => {
  try {
    const { name, dob, criticalData, qrCodeId } = req.body;

    const newPatient = new Patient({
      name,
      dob,
      criticalData,
      qrCodeId,
    });

    const savedPatient = await newPatient.save();
    res.status(201).json({ message: 'Patient added successfully', data: savedPatient });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;


