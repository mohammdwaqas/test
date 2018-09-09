import React, { Component } from "react";
import "./body.css";
import { Card, CardText, Row, Col, CardImg, CardTitle, CardBody, CardImgOverlay } from 'reactstrap';
import story1 from "../images/story1.jpg";
import story2 from "../images/story2.jpeg";
import story3 from "../images/story3.jpg";

export default class Stories extends Component{
    render(){
        return(
            <div>
                <FeaturedLists/>
                <GreateStories/>
            </div>
        )
    }
} 

class FeaturedLists extends Component {
    render() {
        return (
            <div className="container">
                <h2> Featured Listings </h2>
                <Row>
                    <Col md='3' >
                        <Card className="cards card1">
                            <CardText className="cardText" >
                                Gawadar
                        </CardText>
                        </Card>
                    </Col>
                    <Col md='3' >
                        <Card className="cards card2">
                            <CardText className="cardText" >
                                Gawadar
                        </CardText>
                        </Card>
                    </Col>
                    <Col md='3' >
                        <Card className="cards card3">
                            <CardText className="cardText" >
                                Gawadar
                        </CardText>
                        </Card>
                    </Col>
                    <Col md='3' >
                        <Card className="cards card4">
                            <CardText className="cardText" >
                                Gawadar
                        </CardText>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
class GreateStories extends Component {
    render() {
        return (
            <div className="greateStories container" >
                <h2> Grate Stories On OLX </h2>
                <Row>
                    <Col md='4' >
                        <Card>
                            <CardImg src={story1} />
                            <CardImgOverlay>
                                <span className="sold" > SOLD </span>
                            </CardImgOverlay>
                            <CardBody>
                                <CardTitle>
                                    Abdul Rehman, Rawalpindi
                                    <span className="stars" >
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </span>

                                </CardTitle>
                                <CardText>
                                    I was worried about selling my house and thinking how to sell it.
                                    Then I found out how easy it is to list my house for sale on OLX.
                                    I put my ad on OLX and started receiving calls from different buyers immediately.
                                    OLX helped me sell my house in just a few days...
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='4' >
                        <Card>
                            <CardImg src={story2} />
                            <CardImgOverlay>
                                <span className="sold" > SOLD </span>
                            </CardImgOverlay>
                            <CardBody>
                                <CardTitle>
                                    Zain, Rawalpindi
                                    <span className="stars" >
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </span>

                                </CardTitle>
                                <CardText>
                                    I sold my car today after listing it 2 days ago.
                                    I loved the responses on my ad and found OLX really amazing right from the minute I placed the ad.
                                    I recommend everyone to use OLX for buying and selling their products.
                                    You get the best value for your ad here. As they say "OLX bech de."
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='4' >
                        <Card>
                            <CardImg src={story3} />
                            <CardImgOverlay>
                                <span className="sold" > SOLD </span>
                            </CardImgOverlay>
                            <CardBody>
                                <CardTitle>
                                    Yasir, Lahore
                                    <span className="stars" >
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </span>

                                </CardTitle>
                                <CardText>
                                    OLX is a great classified app.
                                    I sold my mobile within 2 hours after posting my ad...
                                    I recommend OLX for selling and purchasing any thing
                                    (e.g. mobile, electronics, house items, cars or property)
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}