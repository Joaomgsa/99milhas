import { Container } from 'reactstrap';
import logo from './assets/images/logo-removebg.png';


export default function App() {
  return (
    <div className="App">
        <Container>
          <header className="App-header">
              Seja Bem vindo a
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="http://99milhas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Em Breve nosso novo portal com mais promoções imperdíveis estará no ar.
            </a>
          </header>
        </Container>
  </div>
  );
}

