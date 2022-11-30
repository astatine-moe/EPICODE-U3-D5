import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/tv-shows" element={<TVShows />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
