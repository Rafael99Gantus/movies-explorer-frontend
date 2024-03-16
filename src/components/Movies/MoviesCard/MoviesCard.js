import React from "react";
import './MoviesCard.css';
import logoX from '../../../images/logoX.svg';
import saveIcon from '../../../images/save_icon.svg';
import api from '../../../utils/MainApi.js'

import { useLocation } from "react-router-dom";
import { useState } from "react";

import { CurrentMovieInfo } from '../../contexts/CurrentMovieInfo.js';

export default function MoviesCard(props) {

    const [saveButton, setSaveButon] = useState(false);
    const movies = React.useContext(CurrentMovieInfo);

    const location = useLocation();

    const isLocationSavedMovies = location.pathname === '/saved-movies';
    const duration = `${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`;

    let imageUrl = `https://api.nomoreparties.co${props.image.url}`;

    function handleSaved(e){
        e.preventDefault();
        if(props.saveMovie){
            api.postSaveMovies(
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
            .then((res) => {
                console.log("Карточка сохранена");
                props.setMovieSaved(res);
                setSaveButon(true)
            })
            .catch((err) => {
                console.log(`Произошла ошибка при сохранении фильма ${err}`)
            })
        }
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
                {saveButton && <button className="movie__saved" type="button" onClick={handleSaved}>
                <img src={saveIcon} alt="Убрать из сохраненных"/>
                    </button>}
            </li>}

            {isLocationSavedMovies && <li className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">{props.nameRU}</h2>
                    <div className="movie__time">{duration}</div>
                </div>
                <img className='movie__image' src={imageUrl} alt={props.nameRU} />
                <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>
            </li>}
        </>
    )
}