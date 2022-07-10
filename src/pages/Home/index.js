import React from "react";
import { Container } from "reactstrap";
import logo from '../../assets/images/logo-removebg.png';

export default function Home() {
    return(
        <main>
            <Container>
                Seja Bem vindo a
                <img src={logo} className="App-logo" alt="logo" />
                <a
                href="http://99milhas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Em Breve nosso novo portal com mais promoções imperdíveis estará no ar.
                </a>
            </Container>
        </main>
    );
}