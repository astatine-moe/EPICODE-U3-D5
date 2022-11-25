import React from "react";
import { Spinner, Carousel, Row, Col, Alert } from "react-bootstrap";

let key = `98032d8e`;

class Gallery extends React.Component {
    state = {
        isLoading: true,
        isError: false,
        movies: [],
    };

    fetchMovies = async () => {
        try {
            let uri = `http://www.omdbapi.com/?apikey=${key}&s=${encodeURIComponent(
                this.props.search.toLowerCase()
            )}`;
            let response = await fetch(uri);

            if (response.ok) {
                let data = await response.json();

                let perChunk = 6; //6 movies per "chunk"

                const d = data.Search.reduce((resultArray, item, index) => {
                    //Convert the original "search" array into chunks of 6 so the carousel can slide between them!
                    const chunkIndex = Math.floor(index / perChunk);

                    if (!resultArray[chunkIndex]) {
                        resultArray[chunkIndex] = [];
                    }

                    resultArray[chunkIndex].push(item);

                    return resultArray;
                }, []);

                console.log(d);

                this.setState({
                    ...this.state,
                    isLoading: false,
                    movies: d,
                });
            } else {
                this.setState({
                    ...this.state,
                    isError: true,
                    isLoading: false,
                });
            }
        } catch (e) {
            this.setState({
                ...this.state,
                isError: true,
                isLoading: false,
            });
        }
    };

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return (
            <div className="movie-gallery m-2">
                <h5 className="text-light mt-2 mb-2">{this.props.search}</h5>

                {this.state.isLoading && <Spinner></Spinner>}

                {this.state.isError && (
                    <Alert variant="danger">
                        There was an error fetching these movies!
                    </Alert>
                )}

                {!this.state.isLoading && !this.state.isError && (
                    <Carousel>
                        {this.state.movies.map((movies) => (
                            <Carousel.Item>
                                <div className="movie-row">
                                    <Row>
                                        {movies.map((movie) => (
                                            <Col md={2}>
                                                <a href="#">
                                                    <img src={movie.Poster} />
                                                </a>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </div>
        );
    }
}

export default Gallery;
