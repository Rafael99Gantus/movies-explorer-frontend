import React from "react";
import './MoviesCard.css';
import logoX from '../../../images/logoX.svg';
import saveIcon from '../../../images/save_icon.svg';

import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function MoviesCard(props) {

    const [saveButton, setSaveButon] = useState(false);

    const location = useLocation();

    const isLocationSavedMovies = location.pathname === '/saved-movies';
    const duration = `${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`;

    let imageUrl = `https://api.nomoreparties.co${props.image.url}`;

    function handleSaved(e) {
        e.preventDefault();
        if (saveButton) {
            props.setSaveMovies(
                props.country,
                props.director,
                props.duration,
                props.year,
                props.description,
                `https://api.nomoreparties.co${props.image.url}`,
                props.trailerLink,
                props.nameRU,
                props.nameEN,
                `https://api.nomoreparties.co${props.image.formats.thumbnail.url}`,
                props.id
            )
            setSaveButon(true);
        }else{
            const saveMovie = props.save.some((saved) => {return saved.movieId === props.id})
            if(saveMovie){
                props.removeSaveMovies(saveMovie.id);
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
                    <h2 className="movie__name">{props.nameRU}</h2>
                    <div className="movie__time">{duration}</div>
                </div>
                <img className='movie__image' src={imageUrl} alt={props.nameRU} />
                {!saveButton && <button className="movie__buttton_save" type="button" onClick={handleSaved}>Сохранить</button>}
                {saveButton && <button className="movie__saved" type="button" onClick={handleDelete}>
                    <img src={saveIcon} alt="Убрать из сохраненных" />
                </button>}
            </li>}

            {isLocationSavedMovies && <li className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">{props.nameRU}</h2>
                    <div className="movie__time">{duration}</div>
                </div>
                <img className='movie__image' src={imageUrl} alt={props.nameRU} />
                <button className="movie__buttton" type="button" onClick={props.removeSaveMovies}>
                    <img src={logoX} alt="Убрать из сохраненных" />
                </button>
            </li>}
        </>
    )
}