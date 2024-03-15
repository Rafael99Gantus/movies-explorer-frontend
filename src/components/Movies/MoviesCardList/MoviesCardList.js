import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader.js'
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { CurrentMovieInfo } from '../../contexts/CurrentMovieInfo.js';

export default function MoviesCardList(filtredMovies, ...props) {
    const user = React.useContext(CurrentUserContext);
    const movies = React.useContext(CurrentMovieInfo);
    const location = useLocation();
    const [quantity, setQuantity] = useState(16);

    useEffect(() => {
        if (window.innerWidth > 1160) {
            setQuantity(16);
            return;
        }
        if (window.innerWidth <= 1160) {
            setQuantity(12);
            return;
        }
        if (window.innerWidth <= 730) {
            setQuantity(9);
            return;
        }
    }, [movies]);

    function handleMore(){
        props.loading = true;
        const more = document.querySelector('.elements__block-more')
        if (window.innerWidth > 1160) {
            more.style.display = "none";
            setQuantity(15);
            return;
        }
        if (window.innerWidth <= 1160) {
            more.style.display = "none";
            setQuantity(14);
            return;
        }
        if (window.innerWidth <= 730) {
            more.style.display = "none";
            setQuantity(11);
            return;
        }
    }

    // const isLocationMovies = location.pathname === "/saved-movies";


    return (
        <>
            {props.loading ? <Preloader/> : <ul className='elements'>
                {movies.slice(0, quantity).map((movie) => {
                    const saveMovie = props.save.some(saved => saved.movieId === movie.id);
                    return (
                        <MoviesCard
                            id={movie.id}
                            country={movie.country}
                            director={movie.director}
                            duration={movie.duration}
                            year={movie.year}
                            description={movie.description}
                            trailerLink={movie.trailerLink}
                            nameRU={movie.nameRU}
                            nameEN={movie.nameEN}
                            
                            image={movie.image}
                            setSaved={props.setSaved}
                            save={props.save}
                            saveMovie={saveMovie}
                        />
                    )
                })}
            </ul>}
            {movies.length + 4 > quantity ? <div className="elements__block">
                <button className="elements__block-more" type="button" onClick={handleMore}>Ещё</button>
            </div> : null}
        </>

    )
}