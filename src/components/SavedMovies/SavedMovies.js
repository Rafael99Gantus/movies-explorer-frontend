import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies({loggedIn}){
    return(
        <main>
        <Header loggedIn={loggedIn}/>
        <SearchForm />
        <MoviesCardList />
        <Footer />
        </main>
    )
}