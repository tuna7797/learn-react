// import './styles/global.css';
import './styles/tailwind.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './learn_pages/Layout';

// ReactDOMRoot { render, unmount }
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>
);

// rendering → mount (DOM)