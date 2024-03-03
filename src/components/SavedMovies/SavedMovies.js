import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies(){
    return(
        <>
        <Header notLog={true}/>
        <SearchForm />
        <MoviesCardList />
        <Footer />
        </>
    )
}