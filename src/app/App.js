import './App.css';

import React from 'react';

import Operations from '../operations/Operations';
import Sidebar from '../sidebar/Sidebar';

const App = () => (
  <div className="App">
    <header className="App__header">
      <h1 className="App__title">GraphQL Metrics</h1>
    </header>
    <Sidebar />
    <Operations />
  </div>
)

export default App;
