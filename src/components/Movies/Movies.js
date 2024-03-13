import React from "react";
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer.js";
import { useState, useEffect } from 'react';
import { CurrentMovieInfo } from '../contexts/CurrentMovieInfo.js';

import apiMov from "../../utils/MoviesApi.js";

export default function Movies(props) {
    const movies = React.useContext(CurrentMovieInfo);
    const [value, setValue] = useState('');

    const filtredMovies = movies.filter(movie => {
        return movie.nameRU.toLowerCase().imcludes(value.toLowerCase())
    })

    return (
        <main>
            <movies className='movies'>
                <Header loggedIn={props.loggedIn} />
                <SearchForm getMovies={props.getMovies} setValue={setValue} value={value} filtredMovies={filtredMovies}/>
                <MoviesCardList />
                <Footer />
            </movies>
        </main>

    )
}