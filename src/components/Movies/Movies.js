import React from "react";
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer.js";
// import PreLoader from "./Preloader/Preloader"

export default function Movies(props) {
    return (
        <main>
            <movies className='movies'>
                <Header notLog={true} />
                <SearchForm />
                <MoviesCardList />
                <Footer />
            </movies>
        </main>

    )
}