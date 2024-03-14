import React from "react";
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer.js";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { CurrentMovieInfo } from '../contexts/CurrentMovieInfo.js';

import apiMov from "../../utils/MoviesApi.js";

export default function Movies(props) {
    const navigate = useNavigate();
    const movies = React.useContext(CurrentMovieInfo);
    const [value, setValue] = useState('');
    const [filtredMovies, setFiltredMovies] = useState({})

    useEffect(() => {
        apiMov.getMovies()
            .then((res) => {
                props.setMovie(res);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate])


    function getMovies(movies) {
        props.setloading(true);
        console.log(movies)
        const filter = movies.filter(function (movie) {
            return movie.nameRU.toLowerCase().trim().imcludes(value.toLowerCase())
        });
        setFiltredMovies(filter);
        console.log(filter);
        props.setloading(false);
    }

    return (
        <main>
            <movies className='movies'>
                <Header loggedIn={props.loggedIn} />
                <SearchForm getMovies={getMovies} setValue={setValue} value={value} />
                <MoviesCardList loading={props.loading}/>
                <Footer />
            </movies>
        </main>

    )
}