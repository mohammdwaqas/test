import React, { Component } from "react";
import "./body.css";
import { Form, Button, Input } from "reactstrap";
import search from "../images/search-solid.svg";
import map from "../images/map-marker-alt-solid.svg";


export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar-background container" >
                <div className="searchbar-holder" >
                    <Form>
                        <div className="locationInput" >
                            <img src={map} className="map-img" alt="map icon" />
                            <Input type="text" className="inputs" placeholder="All Pakistan" />
                        </div>
                        <div className="locationInput" >
                            <img className="map-img" src={search} alt="search-icon" />
                            <Input type="text" className="inputs addsInput" placeholder="1000 of Adds Near You" />
                        </div>
                        <Button type="submit" className="searchBtn" >
                            <img className="search-btn-img" src={search} alt="search-icon" />
                            Search
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}