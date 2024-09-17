import React from 'react';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Sales from './components/Sales';
import Customers from './components/Customers';
import Employees from './components/Employees';

function App() {
  return (
    <div className="App">
      <h1>POS System</h1>
      <Dashboard />
      <Inventory />
      <Sales />
      <Customers />
      <Employees />
    </div>
  );
}

export default App;
