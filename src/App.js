import { BrowserRouter, Routes } from 'react-router-dom';

import Rotas from './routes';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

