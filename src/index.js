import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';



import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNav />
      <Header/>
      <App />
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);

