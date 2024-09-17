const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/pos-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/sales', require('./routes/sales'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/employees', require('./routes/employees'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
