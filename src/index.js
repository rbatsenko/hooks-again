import React from 'react';
import { render } from 'react-dom';
import Store from './Store';
import App from './App';
import './index.css';

const Index = () => (
  <Store>
    <App />
  </Store>
);

render(<Index />, document.getElementById('root'));