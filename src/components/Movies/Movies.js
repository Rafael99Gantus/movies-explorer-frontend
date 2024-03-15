import React from "react";
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer.js";
import Preloader from "./Preloader/Preloader.js";
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { CurrentMovieInfo } from '../contexts/CurrentMovieInfo.js';

import apiMov from "../../utils/MoviesApi.js";

export default function Movies(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const movies = React.useContext(CurrentMovieInfo);
    const [value, setValue] = useState('');

    const [checkbox, setCheckbox] = useState(false)

    function getMovies() {
        props.setloading(true);
        console.log(movies);
        apiMov.getMovies()
        .then((res) => {
            const filterMovies = res.filter(function (movie) {
                return movie.nameRU.toLowerCase().trim().includes(value.toLowerCase())
            });
            console.log(filterMovies);
            if(checkbox === true){
                const shortMovies = filterMovies.filter(function (movie) {
                    return movie.duration <= 40
                });
                props.setMovie(shortMovies);
                console.log(shortMovies);
            } else {
                props.setMovie(filterMovies);
                console.log(filterMovies);
            }
        })
        .catch((err) => {
            console.log(`Пhоизошла ошибка при фильтрации фильмов ${err.message}`);
        })
        .finally(()=>{
            props.setloading(false);
        })
    }

    return (
        <main>
            <movies className='movies'>
                <Header loggedIn={props.loggedIn} />
                <SearchForm getMovies={getMovies} setValue={setValue} value={value} setCheckbox={setCheckbox}/>
                {props.loading ? <Preloader/> :<MoviesCardList loading={props.loading} setSaved={props.setSaved} save={props.save}/>}
                <Footer />
            </movies>
        </main>

    )
}