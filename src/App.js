import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { Container, Button } from "react-bootstrap";

function App() {
    return (
        <>
            <Header />
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
                <Gallery search="Harry Potter" />
                <Gallery search="Lord of the Rings" />
                <Gallery search="Star Wars" />
            </Container>
            <Footer />
        </>
    );
}

export default App;
