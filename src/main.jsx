import React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './components/Portfolio.jsx';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
