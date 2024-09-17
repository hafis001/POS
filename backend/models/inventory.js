const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  reorderPoint: Number
});

module.exports = mongoose.model('Inventory', inventorySchema);
