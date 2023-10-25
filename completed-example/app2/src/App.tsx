import LocalButton from './Widget';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Dynamic System Host</h1>
    <h2>App 2</h2>
    <BrowserRouter>
      <LocalButton />
    </BrowserRouter>
  </div>
);

export default App;
