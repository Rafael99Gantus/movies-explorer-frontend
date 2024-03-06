import React from "react";
import './MoviesCard.css';
import image from '../../../images/stub_movie-opt.jpg';
import logo from '../../../images/save_button.svg';
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

    return (
        <>
            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 1" />
                {!isLocationSavedMovies && <button className="movie__buttton" type="button">Сохранить</button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 2" />
                {!isLocationSavedMovies && <button className="movie__buttton" type="button">Сохранить</button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 3" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 4" />
                {!isLocationSavedMovies && <button className="movie__buttton" type="button">Сохранить</button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 5" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 6" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 7" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 8" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 9" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 10" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 11" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>

            <article className="movie">
                <div className="movie__block">
                    <h2 className="movie__name">В погоне за Бенкси</h2>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка 12" />
                {!isLocationSavedMovies && <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>}
                {isLocationSavedMovies && <button className="movie__buttton" type="button">
                        <img src={logoX} alt="Убрать из сохраненных"/>
                    </button>}
            </article>
        </>
    )
}