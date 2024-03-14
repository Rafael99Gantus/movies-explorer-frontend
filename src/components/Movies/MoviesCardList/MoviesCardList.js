import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader.js'
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { CurrentMovieInfo } from '../../contexts/CurrentMovieInfo.js';

export default function MoviesCardList(props) {
    const location = useLocation();
    const [quantity, setQuantity] = useState(16)

    useEffect(() => {
        if (window.innerWidth <= 1160) {
            setQuantity(12);
            return;
        }
        if (window.innerWidth <= 730) {
            setQuantity(9);
            return;
        }
    }, [quantity])

    const isLocationMovies = location.pathname === "/saved-movies";

    const user = React.useContext(CurrentUserContext);
    const movies = React.useContext(CurrentMovieInfo);


    return (
        <>
            {props.loading ? <Preloader/> : <ul className='elements'>
                {/* {movies.slice(0, quantity).map((movie) => {
                    return (
                        <MoviesCard
                            key={movie.id}

                            name={movie.nameRU}
                            duration={movie.duration}
                            image={movie.image}
                        />
                    )
                })} */}
            </ul>}
            {movies.length > quantity ? <div className="elements__block">
                <button className="elements__block-more" type="button">Ещё</button>
            </div> : null}
        </>

    )
}