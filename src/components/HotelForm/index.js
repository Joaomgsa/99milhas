import { Container, Alert, Button, Label, Form, FormGroup, Input, Col, Row, Card, CardBody } from "reactstrap";

import './styles.css';

export default function HotelForm() {
    return (
        <div className="background-hotelform">
            <Container>
                <Card>
                    <CardBody>
                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Label>
                                                <h4>Para onde você vai?</h4>
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
            </Container>
        </div>
    );
}