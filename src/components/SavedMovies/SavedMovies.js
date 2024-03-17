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

export default function SavedMovies({ loggedIn, save, removeSaveMovies }) {

    const movies = React.useContext(CurrentMovieInfo);

    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState('');
    const [value, setValue] = useState('');
    const [chfngeValue, setChangeValue] = useState('')
    const [checkbox, setCheckbox] = useState(false);
    const [massive, setMassive] = useState(() => {
        const savedFilteredMovies = localStorage.getItem('save');
        return savedFilteredMovies ? JSON.parse(savedFilteredMovies) : [];
    })

    const filterMovies = (movies, value, checkbox) => {
        return movies.filter(movie => {
            return movie.nameRU.toLowerCase().includes(value.toLowerCase());
        });
    };

    function handleSearch(text, check) {
        setLoading(true);
        setErr('');
        const filterMovies = save.filter(function (movie) {
            return movie.nameRU.toLowerCase().trim().includes(text.toLowerCase())
        });
        if (check === true) {
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
        setChangeValue(text)
        setLoading(false);
        console.log(massive)
    }

    useEffect(() => {
        setLoading(true);
        setErr('');
        const filterMovies = massive.filter(function (movie) {
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
        setLoading(false);
        console.log(massive)
    }, [checkbox, massive, setLoading, value])

    const deleteMovies = (movieId) => {
        removeSaveMovies(movieId);
        setMassive(prevMovies => {
            const updatedMovies = prevMovies.filter(movie => movie._id !== movieId);
            const filtered = filterMovies(chfngeValue, checkbox, updatedMovies);
            if (filtered.length === 0) {
                setErr("Ничего не найдено");
            } else {
                setErr("");
            }
            return filtered;
        });
    };

    return (
        <main>
            <Header loggedIn={loggedIn} />
            <SearchForm setValue={setValue} value={value} setCheckbox={setCheckbox} handleSearch={handleSearch} />
            {loading && <Preloader />}
            {err && <p className="movies__err">{err}</p>}
            <MoviesCardList
                movies={massive}
                loading={loading}
                removeSaveMovies={deleteMovies}
                save={save} />
            <Footer />
        </main>
    )
}