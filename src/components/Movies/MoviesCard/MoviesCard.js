import React from "react";
import './MoviesCard.css';
import image from '../../../images/stub_movie.jpg';
import logo from '../../../images/save_button.svg';

// import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

export default function MoviesCard(props) {

    // const currentUser = React.useContext(CurrentUserContext);
    const button = document.querySelector('.movie__buttton')

    // const isOwn = props.card.owner[0] === currentUser._id;
    // const isLiked = props.likes.some(i => i === currentUser._id);
    // const cardLikeButtonClassName = (`elements__heart ${isLiked ? 'elements__heart_active' : ''}`);

    // function handleClick() {
    // 	button.className = 'movie__saved';
    // }

    // function handleLikeClick() { movie__buttton
    // 	props.onCardLike(props.card)
    // }

    return (
        <>
            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__buttton" type="button">Сохранить</button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__buttton" type="button">Сохранить</button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__buttton" type="button">Сохранить</button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>

            <article className="movie">
                <div className="movie__block">
                    <p className="movie__name">В погоне за Бенкси</p>
                    <div className="movie__time">0ч 47м</div>
                </div>
                <img className='movie__image' src={image} alt="Заглушка" />
                <button className="movie__saved" type="button">
                    <img src={logo} alt="Галочка"></img>
                </button>
            </article>
        </>
    )
}