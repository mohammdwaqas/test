import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import olxLogo from "../images/olx_logo.png";
import emailImg from "../images/envelope-regular.svg";
import ClipboardImg from "../images/clipboard-solid.svg";
import phoneImg from "../images/phone-solid.svg";
import "./footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div className="border" >
                <div className="footer" >
                    <Row>
                        <Col lg="2" md="3" sm="6" xs="12"  >
                            <img src={olxLogo} className="olx_logo" alt="OLX" />
                        </Col>
                        <Col lg="2" md="3" sm="6" xs="12"  >
                            <p> Location Map </p>
                            <p> Popular Searches </p>
                            <p> Archieve </p>
                            <p> Sitemap </p>
                        </Col>
                        <Col lg="2" md="3" sm="6" xs="12"  >
                            <p> Terms of Use </p>
                            <p> Help & Contact Us </p>

                        </Col>
                        <Col lg="2" md="3" sm="6" xs="12"  >
                            <p> Who we are </p>
                            <p> Join OLX </p>
                            <p> Happy OLXers </p>
                        </Col>
                        <Col lg="1" md="3" sm="6" xs="12" />
                        <Col lg="3" md="5" sm="7" xs="12" style={{ marginLeft: '-40px' }} >
                            <p className="contactUs" > <strong>Contact Us</strong> </p>
                            <div>
                                <div className="email-setting" >
                                    <Row>
                                        <Col sm="2" md="2" style={{ padding: 0 }} >
                                            <img src={emailImg} alt="email-icon" className="icons" />
                                        </Col>
                                        <Col sm="10" md="10" style={{ padding: '2px' }}>
                                            <span>help@olxLogo.com.pk</span>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col sm="2" md="2" style={{ padding: 0 }} >
                                            <img src={phoneImg} alt="Phone-icon" className="icons" />
                                        </Col>
                                        <Col sm="10" md="10" style={{ padding: '2px' }}>
                                            <span><strong> 080010101 </strong>
                                                <small className="small" > (9:30 am to 6:30 pm) </small>
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col sm="2" md="2" style={{ padding: 0 }} >
                                            <img src={ClipboardImg} alt="clip-board-icon" className="icons" />
                                        </Col>
                                        <Col sm="10" md="10" style={{ padding: '2px' }}>
                                            <span><strong> Business Packages </strong>
                                            </span>
                                            <span>
                                                <small className="small" >(featured ads, advertising)</small>
                                                <a className="small" href="/" > click here </a>
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}