import React from "react";
import './MoviesCard.css';
import logoX from '../../../images/logoX.svg';

import { useLocation } from "react-router-dom";

// import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

export default function MoviesCard(props) {

    const location = useLocation();
    // const currentUser = React.useContext(CurrentUserContext);
    // const button = document.querySelector('.movie__buttton')

    // const isOwn = props.card.owner[0] === currentUser._id;
    // const isLiked = props.likes.some(i => i === currentUser._id);
    // const cardLikeButtonClassName = (`elements__heart ${isLiked ? 'elements__heart_active' : ''}`);

    // function handleClick() {
    // 	button.className = 'movie__saved';
    // }

    // function handleLikeClick() { movie__buttton
    // 	props.onCardLike(props.card)
    // }

    const isLocationSavedMovies = location.pathname === '/saved-movies';
    const duration = `${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`;

    let imageUrl = `https://api.nomoreparties.co${props.image.url}`;

    return (
        <>
             <li className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">{props.name}</h2>
                    <div className="movie__time">{duration}</div>
                </div>
                <img className='movie__image' src={imageUrl} alt={props.name} />
                {!isLocationSavedMovies && <button className="movie__buttton" type="button">Сохранить</button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </li>
        </>
    )
}