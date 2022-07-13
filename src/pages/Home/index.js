import { Container } from "reactstrap";
import TravelForm from "../../components/TravelForm";

export default function Home() {
    return(
        <main>
            <Container>
                <h2>Voos</h2>
                <TravelForm/>
            </Container>
        </main>
    );
};