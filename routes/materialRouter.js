// materialRouter.js

const express = require('express');
const router = express.Router();
const Material = require('../model/material'); // Adjust the path accordingly

// Handle POST request to add a new material
router.post('/add', async (req, res) => {
  try {
    const { name } = req.body;
    const newMaterial = new Material({ name });
    const savedMaterial = await newMaterial.save();
    res.status(201).json(savedMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
