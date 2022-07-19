import { Container,Card, CardImg, CardImgOverlay, CardText, 
    CardTitle, Form, Row, Col, FormGroup, 
    Label,Input, Button } from "reactstrap";


export default function HomeCard() {
    return(
        <div>
            <Card inverse>
                <CardImg
                    alt="capa-Maldivas"
                    src="https://picsum.photos/id/218/4752/3168"
                    style={{
                        height:400
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                        Conheça as Maldivas
                    </CardTitle>
                    <CardText>
                        Aproveite as melhores condições de pagamento para aproveitar esses lugares espetaculares ainda em 2022.
                    </CardText>
                    <Container>
                        <Form>
                            <Row>
                                <Col md={8 }>
                                    <FormGroup>
                                        <Label>
                                            De onde você está Saindo
                                        </Label>
                                        <Input
                                            id="origem"
                                            name="origem"
                                            placeholder="Busque um aeroporto"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label>
                                            Viajantes:
                                        </Label>
                                        <Input
                                            id="passageiros"
                                            name="passageiros"
                                            placeholder="1 Viajante"
                                            type="number"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label>
                                    Escolha as Datas
                                </Label>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label>
                                            Ida:
                                        </Label>
                                        <Input
                                            id="data-partida"
                                            name="data-partida"
                                            type="date"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label>
                                            Volta:
                                        </Label>
                                        <Input
                                            id="data-volta"
                                            name="data-volta"
                                            type="date"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button> Comprar </Button>
                        </Form>
                    </Container>
                </CardImgOverlay>
            </Card>
        </div>
    );
}