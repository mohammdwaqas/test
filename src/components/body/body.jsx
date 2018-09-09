import React, { Component } from "react";
import "./body.css";
import SearchBar from "./searchBar";
import CategoryMenu from "./categoryMenu";
import Stories from "./stories";
import Banner from "../bodyBanner/banner";
import Header from "../header/header";
export default class Body extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <CategoryMenu />
        <Banner />
        <Stories />
      </div>
    );
  }
}
