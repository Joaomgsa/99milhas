import { CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default function PromoGroup() {
    return(
        <CardGroup>
            <Card>
                <CardImg
                alt="Deserto cairo"
                src="https://picsum.photos/318/180"
                top
                width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Cairo, Egito
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Até dezembro 2023
                    </CardSubtitle>
                    <CardText>
                        Aproveite a promoção, agende sua data e curta esse momento com uma compania especial.
                    </CardText>
                    <Button>
                        Aproveite
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                alt="Deserto cairo"
                src="https://picsum.photos/318/180"
                top
                width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Cairo, Egito
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Até dezembro 2023
                    </CardSubtitle>
                    <CardText>
                        Aproveite a promoção, agende sua data e curta esse momento com uma compania especial.
                    </CardText>
                    <Button>
                        Aproveite
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                alt="Deserto cairo"
                src="https://picsum.photos/318/180"
                top
                width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Cairo, Egito
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Até dezembro 2023
                    </CardSubtitle>
                    <CardText>
                        Aproveite a promoção, agende sua data e curta esse momento com uma compania especial.
                    </CardText>
                    <Button>
                        Aproveite
                    </Button>
                </CardBody>
            </Card>
        </CardGroup>
    );
}