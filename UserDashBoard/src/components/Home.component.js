import React, { Component } from 'react'
import homeImage from '../assets/homepage.png'
import bottle from '../assets/bottle.jpeg'
import track from '../assets/track.jpeg'
import train from '../assets/train.jpeg'
import { Jumbotron, Container, Card, Button, Col, Row } from "react-bootstrap";
import Footer from './footer.component';

const data = [
    {
      image: track,
      preview:
        "To enhance passenger amenities, the IRCTC launched Rail Neer, a branded packaged drinking water for the rail ...",
      text:
        "To enhance passenger amenities, the IRCTC launched Rail Neer, a branded packaged drinking water for the rail commuters. Rail Neer is processed, purified and bottled at state-of-art plants. Completely automatic plant and no manual handling of product water at any stage. IRCTC stands for quality and has a key role in ensuring service and product of the highest quality for the rail passenger as well as visitor to any railway premises. High quality product can only be ensured when production is in-house under full control and supervision of IRCTC.",
    },
    {
      image: bottle,
      preview:
        "At present, IRCTC has eleven operational Rail Neer Plants at Nangloi, Danapur, Palur, Ambernath, Amethi ...",
      text:
        "At present, IRCTC has eleven operational Rail Neer Plants at Nangloi, Danapur, Palur, Ambernath, Amethi, Parassala, Bilaspur, Ahmedabad, Hapur, Bhopal and Nagpur out of which, Rail Neer Plants at Amethi, Parassala, Ahmedabad, Hapur, Bhopal and Nagpur are under PPP mode, further six more plans are being set up under PPP mode with capital support from IRCTC. Cumulative production capacity of above eleven Rail Neer Plants is 11,64,000 bottles per day which will likely be increased to 16,24,000 bottles per day in FY 2019-20 by setting up six more plants.",
    },
    {
      image: train,
      preview:
        "The diamond crossing (dubbed so by railways themselves), in Nagpur, is one-of-its-kind, from where ...",
      text:
        "The diamond crossing (dubbed so by railways themselves), in Nagpur, is one-of-its-kind, from where trains go East, West, North and South.",
    },
  ];

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron
                    style={{
                        backgroundImage: `url(${homeImage})`,
                        backgroundRepeat: `no-repeat`,
                        width: `100%`,
                        backgroundSize: `cover`,
                        height: `60rem`,
                    }}
                    className="blur"
                    fluid
                >
                </Jumbotron>

                <Container
                    style={{
                        "margin-bottom": "50px",
                        
                    }}
                >
                    <Row>
                        {data.map((item) => {
                            return (
                                <>
                                    <Col
                                        style={{
                                            margin: "2px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Card
                                            style={{
                                                width: "18rem",
                                            }}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={item.image}
                                                className="object-fit-cover"
                                            />
                                            <Card.Body>
                                                <Card.Text>{item.preview}</Card.Text>
                                                <a href="https://www.thebetterindia.com/27496/interesting-facts-indian-railways/">
                                                    <Button
                                                        variant="primary"
                                                    >
                                                        Read More
                                                    </Button>
                                                </a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            );
                        })}
                    </Row>
                </Container>{" "}

      <Footer /> 
     
            </div>
        )
    }
}

export default Home
