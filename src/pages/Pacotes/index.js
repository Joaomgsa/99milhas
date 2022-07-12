import React from "react";
import { Container, Alert, Button, Label, Form, FormGroup, Input, Col, Row } from "reactstrap";


export default function Pacotes() {
    return (
        <Container>
            <Form>
                <Row>
                    <Label> 
                        <h2> Passagens aéreas </h2>
                    </Label>
                    <Col md={6}>
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
                    <Col md={6}>
                        <FormGroup>
                            <Label>
                                Para onde você vai?
                            </Label>
                            <Input
                                id="destino"
                                name="destino"
                                placeholder="Busque um aeroporto"
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
                <Button> Buscar Pacotes</Button>
            </Form>

            <div>
                <Alert color="primary">
                    <h3>Tem Milhas Sobrando?</h3> Transforme suas milhas em dinheiro <Button color="primary"> Vender</Button>
                </Alert>
            </div>


           </Container>
    );
}