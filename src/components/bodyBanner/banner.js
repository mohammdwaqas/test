import React, { Component } from "react";
import "./banner.css";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import banner from "./images/banner.png";
class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Row className="row">
          <Col md="6" sm="4" xs="6" className="img-banner">
            <Link to="/">
              <div className="img-banner">
                <img src={banner} />
              </div>
            </Link>
          </Col>

          <Col md="6" sm="4" xs="6">
            <iframe
              className="banner"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AoUj5qG2SWY"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
