import { CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Card, Button, Container } from "reactstrap";

import './styles.css';

export default function PromoGroup() {
    return(
        <Container>
            <CardGroup className="cardgroup-margin">
                <Card className="card-padding" >
                    <CardImg
                    alt="Deserto cairo"
                    src="https://picsum.photos/id/184/4288/2848"
                    top
                    width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Cairo, Egito
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-warning"
                            tag="h6"
                        >
                            Até dezembro 2022
                        </CardSubtitle>
                        <CardText>
                            Aproveite a promoção, agende sua data e curta esse momento com uma compania especial.
                        </CardText>
                        <Button color="primary">
                            Aproveite
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-padding">
                    <CardImg
                    alt="Deserto cairo"
                    src="https://picsum.photos/id/124/3504/2336"
                    top
                    width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Malé, Maldivas
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-warning"
                            tag="h6"
                        >
                            Até março 2023
                        </CardSubtitle>
                        <CardText>
                            Aproveite a promoção, agende sua data e curta esse momento com uma compania especial.
                        </CardText>
                        <Button color="primary">
                            Aproveite
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-padding">
                    <CardImg
                    alt="Deserto cairo"
                    src="https://picsum.photos/id/362/4438/2954"
                    top
                    width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Punta Cana, Caribe
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-warning"
                            tag="h6"
                        >
                            Até dezembro 2023
                        </CardSubtitle>
                        <CardText>
                            Aproveite a promoção, agende sua data e curta esse momento com uma compania especial.
                        </CardText>
                        <Button color="primary">
                            Aproveite
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </Container>
    );
}