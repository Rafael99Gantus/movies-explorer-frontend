import React from "react";
import './MoviesCard.css';
import logoX from '../../../images/logoX.svg';
import saveIcon from '../../../images/save_icon.svg';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function MoviesCard({ movie, save, removeSaveMovies, setSaveMovies }) {

    const [saveButton, setSaveButon] = useState(false);
    const [isSaved, setIsSaved] = useState(save && movie ? save.some(savedMovie => savedMovie.movieId === movie.id) : false);

    const location = useLocation();

    const isLocationSavedMovies = location.pathname === '/saved-movies';
    const duration = `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

    let imageUrl = `https://api.nomoreparties.co${movie.image.url}`;

    useEffect(() => {
        if (save && movie) {
            setIsSaved(save.some(savedMovie => savedMovie.movieId === movie.id));
        }
    }, [save, movie]);

    function handleSaved(e) {
        e.preventDefault();
        if (!saveButton) {
            setSaveMovies({
                ...movie,
                movieId: movie.id,
            }).then(() => {
                setSaveButon(true);
            }).catch((err) => {
                console.log(err)
            })
        } else {
            const saveMovie = save.some((saved) => { return saved.movieId === movie.id })
            if (saveMovie) {
                removeSaveMovies(saveMovie.id);
                setSaveButon(false);
            }
        }
    }

    function handleDelete(e) {
        e.preventDefault();
        console.log('delete movie');
        setSaveButon(false);
    }

    return (
        <>
            {!isLocationSavedMovies && <li className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">{movie.nameRU}</h2>
                    <div className="movie__time">{duration}</div>
                </div>
                <img className='movie__image' src={imageUrl} alt={movie.nameRU} />
                {!saveButton && <button className="movie__buttton_save" type="button" onClick={handleSaved}>Сохранить</button>}
                {saveButton && <button className="movie__saved" type="button" onClick={handleDelete}>
                    <img src={saveIcon} alt="Убрать из сохраненных" />
                </button>}
            </li>}

            {isLocationSavedMovies && <li className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">{movie.nameRU}</h2>
                    <div className="movie__time">{duration}</div>
                </div>
                <img className='movie__image' src={imageUrl} alt={movie.nameRU} />
                <button className="movie__buttton" type="button" onClick={movie.removeSaveMovies}>
                    <img src={logoX} alt="Убрать из сохраненных" />
                </button>
            </li>}
        </>
    )
}