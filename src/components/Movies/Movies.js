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
                console.log(movies.length)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate])


    function getMovies(movies) {
        console.log(movies)
        // let filter = {};
        // filter = movies.filter(movie => {
        //     return movie.nameRU.toLowerCase().imcludes(value.toLowerCase())
        // });
        // console.log(filter);
    }

    return (
        <main>
            <movies className='movies'>
                <Header loggedIn={props.loggedIn} />
                <SearchForm getMovies={getMovies} setValue={setValue} value={value} />
                <MoviesCardList />
                <Footer />
            </movies>
        </main>

    )
}