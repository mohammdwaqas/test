import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "../submitAd/submit.css";

class SubmitAd extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="MainBody">
          {/* MAIN HEADING */}
          <h2>Submit an Ad</h2>
          <hr />
          {/*  AD INFORMATION STARTS HERE */}
          {/* AD TITLE */}

          <div className="controls">
            <legend>Title:</legend>
            <input
              type="text"
              placeholder="title of your ad here.."
              ref="txtTitle"
            />
            <hr />
            {/* AD DESCRIPTION */}
            <legend>Description:</legend>
            <input
              type="text"
              placeholder="description of your ad here.."
              ref="txtDescription"
            />
            <hr />
            {/* PHOTO */}
            <legend>Picture:</legend>
            <input type="file" ref="filePicture" />
            <hr />
            {/* // AD INFORMATION ENDS HERE */}

            {/* //PERSONAL INFORMATION STARTS HERE */}
            <h4>Personal Information:</h4>
            <hr />
            {/* NAME */}
            <legend>Name:</legend>
            <input type="text" placeholder="your name here.." ref="txtName" />
            <hr />

            {/* NAME */}
            <legend>Phone #:</legend>
            <input
              type="text"
              placeholder="your mobile number here.."
              ref="txtMobile"
            />
            <hr />

            {/* PROVINCE */}
            <legend>Province:</legend>
            <input
              type="text"
              placeholder="your province here.."
              ref="txtProvince"
            />
          </div>
          {/* //PERSONAL INFORMATION ENDS HERE */}

          {/* SUBMIT BUTTON */}
          <div className="submit">
            <button id="btnSubmit" onClick={() => {}}>
              {" "}
              Submit
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default SubmitAd;
