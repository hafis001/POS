const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// Get all inventory items
router.get('/', async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
});

// Add a new inventory item
router.post('/', async (req, res) => {
  const item = new Inventory(req.body);
  await item.save();
  res.json(item);
});

module.exports = router;
