import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";


export default function HomeCard() {
    return(
        <div>
            <Card inverse>
                <CardImg
                    alt="capa-Maldivas"
                    src="https://picsum.photos/id/218/4752/3168"
                    style={{
                        height:470
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                        Conheça as Maldivas
                    </CardTitle>
                    <CardText>
                        Aproveite as melhores condições de pagamento para aproveitar esses lugares espetaculares.
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
}