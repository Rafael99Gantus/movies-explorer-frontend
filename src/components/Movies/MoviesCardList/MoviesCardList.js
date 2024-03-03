import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from "react-router-dom";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
// import { CurrentCardInfo } from '../../contexts/CurrentCardInfo.js';

export default function MoviesCardList(props) {
    const location = useLocation();

    const isLocationMovies = location.pathname === "/saved-movies";

    // const currentUser = React.useContext(CurrentUserContext);
    // const cards = React.useContext(CurrentCardInfo);

    return (
        <>
            <section className='elements'>
                <MoviesCard />
                {/* {cards.map((card) => {
                return (
                    <MoviesCard key={card._id}

                        card={card}
                        link={card.link}
                        name={card.name}
                        likes={card.likes}
                        isOwn={card.owner._id}

                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                        onAnswer={props.onAnswer}

                        currentUser={currentUser}
                    />
                )
            })} */}
            </section>
            {!isLocationMovies && <div className="elements__block">
                <button className="elements__block-more" type="button">Ещё</button>
            </div>}
        </>

    )
}