import logo from './assets/images/logo-removebg.png';

import Header from './components/Header';


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <p>
        Seja Bem vindo a
      </p>
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Em Breve nosso novo portal com mais promoções imperdíveis estará no ar.
      </a>
    </header>
  </div>
  );
}

export default App;
