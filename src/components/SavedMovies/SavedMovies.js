import React from "react";
import './SavedMovies.css';
import '../Movies/Movies.css'
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader.js";

import { useEffect, useState } from "react";

import { CurrentMovieInfo } from '../contexts/CurrentMovieInfo.js';

export default function SavedMovies({ loggedIn, loading, setloading }) {

    const movies = React.useContext(CurrentMovieInfo);

    const [err, setErr] = useState('');
    const [value, setValue] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [massive, setMassive] = useState([])

    useEffect(() => {
        setloading(true);
        setErr('');
        const filterMovies = movies.filter(function (movie) {
            return movie.nameRU.toLowerCase().trim().includes(value.toLowerCase())
        });
        if (checkbox === true) {
            const shortMovies = filterMovies.filter(function (movie) {
                return movie.duration <= 40
            });
            setMassive(shortMovies);
            console.log(shortMovies);
        } else {
            setMassive(filterMovies);
            console.log(filterMovies);
        }
        if (massive.length === 0) {
            setErr('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        }
        setloading(false);
        console.log(massive)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkbox])

    return (
        <main>
            <Header loggedIn={loggedIn} />
            <SearchForm setValue={setValue} value={value} setCheckbox={setCheckbox} />
            {loading && <Preloader />}
            {err && <p className="movies__err">{err}</p>}
            <MoviesCardList
                movies={massive}
                loading={loading}/>
            <Footer />
        </main>
    )
}