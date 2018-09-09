import React, { Component } from "react";

import Header from "../../header/header";
import Footer from "../../footer/footer";
import * as firebase from "firebase";
import "./register.css";
import { Card, Button, Alert, Form, FormGroup, Col, Row } from "reactstrap";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyClIzTDTpEyGWlvDd3bzllIKwO7bV79Svg",
      authDomain: "saylani-f3a4c.firebaseapp.com",
      databaseURL: "https://saylani-f3a4c.firebaseio.com",
      projectId: "saylani-f3a4c",
      storageBucket: "",
      messagingSenderId: "839940906759"
    };
    firebase.initializeApp(config);
  }
  matchPassword(event) {
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    let span = document.getElementById("alertMsg");
    if (repeatPassword != password) {
      console.log("password not matched");
      span.classList.add("display-alertMsg");
      event.preventDefault();
    } else {
      span.classList.remove("display-alertMsg");
    }
  }
  handleSubmit = e => {
    // let _this = this.state;
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    this.setState(
      {
        email: email,
        password: password
      },
      () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
      }
    );
  };
  render() {
    return (
      <div>
        <Header />
        <div className="field-set-signUp">
          <p> Create an Account </p>
          <div>
            <Card>
              <Form autoComplete="off" className="form-signUp">
                <Row>
                  <Col className="data-col" lg="7">
                    <Col>
                      <FormGroup>
                        <label>
                          <strong>
                            {" "}
                            Email <span className="staric">*</span>{" "}
                          </strong>
                        </label>
                        <input
                          ref="email"
                          className="signUp-Input-Control"
                          required="true"
                          type="email"
                          name="email"
                        />
                        <span className="input-specifier">
                          {" "}
                          Enter your Email{" "}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label>
                          <strong>
                            {" "}
                            Password <span className="staric">*</span>{" "}
                          </strong>
                        </label>
                        <input
                          ref="password"
                          className="signUp-Input-Control"
                          required="true"
                          type="password"
                          id="password"
                          name="password"
                        />
                        <span className="input-specifier">
                          {" "}
                          Enter your Password{" "}
                        </span>
                      </FormGroup>
                      <FormGroup>
                        <label>
                          <strong>
                            {" "}
                            Repeat Password <span className="staric">
                              *
                            </span>{" "}
                          </strong>
                        </label>
                        <input
                          className="signUp-Input-Control"
                          required="true"
                          id="repeatPassword"
                          type="password"
                          name="repeatPassword"
                          onBlur={this.matchPassword.bind(this)}
                        />
                        <span className="alertMsg" id="alertMsg">
                          <Alert color="danger">
                            {" "}
                            Password didn't matched{" "}
                          </Alert>
                        </span>
                        <span className="input-specifier">
                          {" "}
                          Repeat your Password{" "}
                        </span>
                      </FormGroup>
                    </Col>
                  </Col>
                  <Col lg="5" className="features-list">
                    <p>
                      By having a password you will have access to{" "}
                      <strong> My ads </strong> where you can:
                    </p>
                    <ul>
                      <li>Edit or Delete your Ads</li>
                      <li>Check responses for your Ads</li>
                      <li>See saved Ads</li>
                    </ul>
                    <p>
                      Provide your e-mail address & password and click confirm
                      link in e-mail which will be sent to you..
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md="2" />
                  <Col md="10">
                    <input
                      type="checkbox"
                      required="true"
                      style={{ width: "10%" }}
                    />
                    <span>
                      <span className="staric">*</span> By registering on OLX,
                      you accept our OLX.com.pk
                      <a href="/" target="_blank">
                        Terms of Use.
                      </a>
                    </span>
                    <div>
                      <Button
                        className="signUpBtn"
                        type="button"
                        onClick={e => this.handleSubmit()}
                        color="primary"
                      >
                        {" "}
                        Create{" "}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
