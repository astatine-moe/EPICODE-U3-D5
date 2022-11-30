import React from "react";
import logo from "../netflix_logo.png";

import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import { Container, Button, Row, Col } from "react-bootstrap";
import plusButton from "../plus.png";
import kidsIcon from "../kids_icon.png";
import avatar from "../avatar.png";
import Profile from "./Profile";

const TVShows = (props) => {
    return (
        <>
            <Header
                profile={{
                    name: null,
                    icon: null,
                    search: [],
                }}
            />
            <Container fluid>
                <Gallery search="The Walking Dead" />
                <Gallery search="Game of Thrones" />
            </Container>
            <Footer />
        </>
    );
};

export default TVShows;
