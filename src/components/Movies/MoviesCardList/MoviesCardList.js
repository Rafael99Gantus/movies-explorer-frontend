import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { CurrentMovieInfo } from '../../contexts/CurrentMovieInfo.js';

export default function MoviesCardList(props) {
    const location = useLocation();

    const isLocationMovies = location.pathname === "/saved-movies";

    const user = React.useContext(CurrentUserContext);
    const movies = React.useContext(CurrentMovieInfo);
    

    return (
        <>
            <ul className='elements'>
                {movies.map((movie) => {
                    return (
                        <MoviesCard
                            key={movie.id}

                            name={movie.nameRU}
                            duration={movie.duration}
                            image={movie.image}
                        />
                    )
                })}
            </ul>
            {!isLocationMovies && <div className="elements__block">
                <button className="elements__block-more" type="button">Ещё</button>
            </div>}
        </>

    )
}