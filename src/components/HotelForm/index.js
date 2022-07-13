import { Container, Alert, Button, Label, Form, FormGroup, Input, Col, Row, Card, CardBody } from "reactstrap";

export default function HotelForm() {
    return (
        <Container>
           <Card>
                <CardBody>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label>
                                        Para onde você vai?
                                    </Label>
                                    <Input
                                        id="cidade-hotel"
                                        name="cidade-hotel"
                                        placeholder="Busque Cidade ou aeroporto"
                                        type="text"
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
                            <Col md={4}>
                                <FormGroup>
                                    <Label>
                                        Passageiros:
                                    </Label>
                                    <Input
                                        id="passageiros"
                                        name="passageiros"
                                        placeholder="1 Passageiro"
                                        type="number"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button> Buscar Hotéis</Button>
                    </Form>
                </CardBody>
            </Card>
            {/* <div className="alert-margin">
                <Alert color="primary">
                    <h3>Tem Milhas Sobrando?</h3> Transforme suas milhas em dinheiro <Button color="primary"> Vender</Button>
                </Alert>
    </div> */}


        </Container>
    );
}