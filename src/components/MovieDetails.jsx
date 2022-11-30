import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
    Container,
    Button,
    Row,
    Col,
    Spinner,
    Alert,
    ListGroup,
    Badge,
} from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";

let key = `98032d8e`;

const MovieDetails = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState({
        title: "",
        year: "",
        released: "",
        runTime: "",
        poster: "",
    });

    const fetchMovie = async (id) => {
        try {
            let uri = `http://www.omdbapi.com/?apikey=${key}&i=${id}`;
            let response = await fetch(uri);
            if (response.ok) {
                let data = await response.json();

                setMovie({
                    title: data.Title,
                    year: data.Year,
                    released: data.Released,
                    runTime: data.Runtime,
                    poster: data.Poster,
                });
                setIsLoading(false);
            } else {
                setError("Error fetching movie");
                setIsLoading(false);
            }
        } catch (e) {
            setError("Error fetching movie");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovie(params.id);
    }, []);

    return (
        <>
            <Header
                profile={{
                    name: null,
                    icon: null,
                    search: [],
                }}
            />
            <Container className="p-4">
                {isLoading && <Spinner></Spinner>}

                {error && (
                    <Alert variant="danger">
                        There was an error fetching these movies!
                    </Alert>
                )}

                {!isLoading && !error && (
                    <>
                        <ListGroup as="ol">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Title</div>
                                    {movie.title}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Released</div>
                                    {movie.released}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Run time</div>
                                    {movie.runTime}
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                        <Container fluid className="text-center mt-5">
                            <img src={movie.poster} />
                        </Container>
                    </>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default MovieDetails;
