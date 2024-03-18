import React from "react";
import './MoviesCard.css';
import logoX from '../../../images/logoX.svg';
import saveIcon from '../../../images/save_icon.svg';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import apiMov from '../../../utils/MainApi';

export default function MoviesCard({ movie, save, removeSaveMovies, setSaveMovies, id }) {

    const [saveButton, setSaveButon] = useState(false);
    const [isSaved, setIsSaved] = useState(save && movie ? save.some(savedMovie => savedMovie.movieId === movie.id) : false);

    const location = useLocation();

    const isLocationSavedMovies = location.pathname === '/saved-movies';
    const duration = `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

    let imageMovie = `https://api.nomoreparties.co${movie.image.url}`;

    let imageSavedMovie = `${movie.image}`;

   

    useEffect(() => {
        if (save && movie) {
            setIsSaved(save.some(savedMovie => savedMovie.movieId === movie.id));
        }
    }, [save, movie]);

    // function handleSaved(e) {
    //     e.preventDefault();
    //     if (!saveButton) {
    //         setSaveMovies({
    //             ...movie,
    //             movieId: movie.id,
    //         }).then(() => {
    //             setSaveButon(true);
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // } else {
    //     const saveMovie = save.some((saved) => { return saved.movieId === movie.id })
    //     if (saveMovie) {
    //         removeSaveMovies(saveMovie.id);
    //         setSaveButon(false);
    //     }
    // }
    // }

    const handleSaved = (e) => {
        e.preventDefault();
        if (!isSaved) {
            setSaveMovies(
                movie.country,
                movie.director,
                movie.duration,
                movie.year,
                movie.description,
                `https://api.nomoreparties.co${movie.image.url}`,
                movie.trailerLink,
                movie.nameRU,
                movie.nameEN,
                `https://api.nomoreparties.co${movie.image.url}`,
                id
            ).then(() => {
                setIsSaved(false);
            }).catch((err) => {
                console.log(err)
            })
        } else {
            const saveMovie = save.some((saved) => { return saved.movieId === movie.id })
            if (saveMovie) {
                removeSaveMovies(id);
                setIsSaved(false);
            }
        }

    }

    function handleDelete(e) {
        e.preventDefault();
        console.log('delete movie');
        removeSaveMovies(movie.movieId);
        setSaveButon(false);
    }

    return (
        <>
            {!isLocationSavedMovies && <li className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">{movie.nameRU}</h2>
                    <div className="movie__time">{duration}</div>
                </div>
                <img className='movie__image' src={imageMovie} alt={movie.nameRU} />
                {!isSaved && <button className="movie__buttton_save" type="button" onClick={handleSaved}>Сохранить</button>}
                {isSaved && <button className="movie__saved" type="button" onClick={handleSaved}>
                    <img src={saveIcon} alt="Убрать из сохраненных" />
                </button>}
            </li>}

            {isLocationSavedMovies && <li className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">{movie.nameRU}</h2>
                    <div className="movie__time">{duration}</div>
                </div>
                <img className='movie__image' src={imageSavedMovie} alt={movie.nameRU} />
                <button className="movie__buttton" type="button" onClick={handleDelete}>
                    <img src={logoX} alt="Убрать из сохраненных" />
                </button>
            </li>}
        </>
    )
}