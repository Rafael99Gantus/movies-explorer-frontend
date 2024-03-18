import React from "react";
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer.js";
import Preloader from "./Preloader/Preloader.js";
import { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentMovieInfo } from '../contexts/CurrentMovieInfo.js';

import apiMov from "../../utils/MoviesApi.js";

export default function Movies(props) {
    const navigate = useNavigate();
    const movies = React.useContext(CurrentMovieInfo);
    const [err, setErr] = useState('');

    const [film, setFilm] = useState(() => {
        const savedFilms = localStorage.getItem('film');
        return savedFilms ? JSON.parse(savedFilms) : [];
    });

    const [value, setValue] = useState(() => {
        return localStorage.getItem('text') || "";
    });

    const [filteredMovies, setFilteredMovies] = useState(() => {
        const savedFilteredMovies = localStorage.getItem('filteredMovies');
        return savedFilteredMovies ? JSON.parse(savedFilteredMovies) : [];
    });

    // const [filteredMovies, setFilteredMovies] = useState([]);

    // const [checkbox, setCheckbox] = useState(() => {
    //     return localStorage.getItem('checkbox') === 'true';
    // });

    const [checkbox, setCheckbox] = useState(() => {
        return localStorage.getItem('checkbox');
    });

    useEffect(() => {
        localStorage.setItem('text', value);
        localStorage.setItem('checkbox', checkbox);
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    }, [value, checkbox, filteredMovies]);

    function newValue(text) {
        setValue(text);
        localStorage.setItem('text', text);
    }

    const filterMovies = (movies, value, checkbox) => {
        return movies.filter(movie => {
            return movie.nameRU.toLowerCase().includes(value.toLowerCase());
        });
    };

    function getMovies(text, check) {
        props.setloading(true);
        setErr('');
        setCheckbox(check);
        newValue(text);
        // apiMov.getMovies()
        // .then((res) => {
        //     const filterMovies = res.filter(function (movie) {
        //         return movie.nameRU.toLowerCase().trim().includes(value.toLowerCase())
        //     });
        //     console.log(filterMovies);
        //     if(checkbox === true){
        //         const shortMovies = filterMovies.filter(function (movie) {
        //             return movie.duration <= 40
        //         });
        //         localStorage.setItem('movies', shortMovies);
        //         localStorage.setItem('text', value);
        //         localStorage.setItem('check', checkbox);
        //         props.setMovie(shortMovies);
        //         console.log(shortMovies);
        //     } else {
        //         localStorage.setItem('movies', filterMovies);
        //         localStorage.setItem('text', value);
        //         localStorage.setItem('check', checkbox);
        //         props.setMovie(filterMovies);
        //         console.log(filterMovies);
        //     }
        // })
        // .catch((err) => {
        //     console.log(`Произошла ошибка при фильтрации фильмов ${err.message}`);
        //     setErr('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        // })
        // .finally(()=>{
        //     props.setloading(false);
        // })
        setTimeout(() => {
            if (film.length === 0) {
                apiMov.getMovies()
                    .then((res) => {
                        
                        const filtered = filterMovies(res, text, check);
                        localStorage.setItem('film', JSON.stringify(res));
                        setFilm(res);
                        if (check) {
                            const short = filtered.filter(function (movie) {
                                return movie.duration <= 40
                            })
                            setFilteredMovies(short);
                            if (filtered.length === 0) {
                                setErr("Ничего не найдено");
                            }
                        }else{
                            setFilteredMovies(filtered);
                            if (filtered.length === 0) {
                                setErr("Ничего не найдено");
                            }
                        }
                    })
                    .catch((err) => {
                        setErr('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                    })
                    .finally(() => {
                        props.setloading(false);
                    });
            } else {
                const filtered = filterMovies(film, text, check);
                if (check) {
                    const short = filtered.filter(function (movie) {
                        return movie.duration <= 40
                    })
                    setFilteredMovies(short);
                    if (filtered.length === 0) {
                        setErr("Ничего не найдено");
                    }
                }else{
                    setFilteredMovies(filtered);
                    if (filtered.length === 0) {
                        setErr("Ничего не найдено");
                    }
                }
                props.setloading(false);
            }
        }, 500)
    }

    const handleCheckbox = () => {
        if(checkbox === true){
            setCheckbox(false)
        }
        if(checkbox === false){
            setCheckbox(true)
        }
        const check = !checkbox
        localStorage.setItem('checkbox', check);
        if (value) {
            getMovies(value, check);
        }
    };

    return (
        <main>
            <movies className='movies'>
                <Header loggedIn={props.loggedIn} />
                <SearchForm getMovies={getMovies} value={value} setValue={setValue} checkbox={checkbox} handleCheckbox={handleCheckbox} />
                {props.loading && <Preloader />}
                {err && <p className="movies__err">{err}</p>}

                {(!props.loading && !err) && <MoviesCardList
                    loading={props.loading}
                    movies={filteredMovies}
                    save={props.save}

                    removeSaveMovies={props.removeSaveMovies}
                    setSaveMovies={props.setSaveMovies}
                />}

                <Footer />
            </movies>
        </main>

    )
}