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

class Main extends React.Component {
    state = {
        profile: {
            name: null,
            icon: null,
            search: [],
        },
    };

    setProfile = (name, icon, search) => {
        console.log("Setting state");
        this.setState({
            ...this.state,
            profile: {
                ...this.state.profile,
                name,
                icon,
                search,
            },
        });
    };

    render() {
        return (
            <>
                {this.state.profile.name && (
                    <>
                        <Header
                            profile={this.state.profile}
                            func={this.setProfile}
                        />
                        <Container fluid>
                            <div className="genre-details">
                                <div className="d-flex">
                                    <h3 className="text-light">Movies</h3>
                                    <Button
                                        variant="outline-light"
                                        className="genre-button dropdown-toggle"
                                    >
                                        Genres
                                    </Button>
                                </div>
                            </div>
                            {this.state.profile.search.map((searchTerm) => (
                                <Gallery search={searchTerm} />
                            ))}
                            {/* <Gallery search="Harry Potter" />
                            <Gallery search="Lord of the Rings" />
                            <Gallery search="Star Wars" /> */}
                        </Container>
                        <Footer />
                    </>
                )}

                {!this.state.profile.name && (
                    <div className="d-flex h-100 justify-content-center align-items-center">
                        <div>
                            <h1 className="text-light text-center mb-5">
                                Who's watching?
                            </h1>
                            <div className="profiles">
                                <Profile
                                    image={avatar}
                                    text="Morgan"
                                    profile={{
                                        name: "Morgan",
                                        icon: avatar,
                                        search: [
                                            "Harry Potter",
                                            "Lord of the Rings",
                                            "Star Wars",
                                        ],
                                    }}
                                    func={this.setProfile}
                                />
                                <Profile
                                    image={kidsIcon}
                                    text="Kids"
                                    profile={{
                                        name: "Kids",
                                        icon: kidsIcon,
                                        search: ["Shrek", "Lego", "Disney"],
                                    }}
                                    func={this.setProfile}
                                />
                                <Profile
                                    image={plusButton}
                                    text="Add Profile"
                                    profile={null}
                                    func={this.setProfile}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default Main;
