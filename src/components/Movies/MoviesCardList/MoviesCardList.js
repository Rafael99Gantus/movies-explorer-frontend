import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader.js'
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CurrentMovieInfo } from '../../contexts/CurrentMovieInfo.js';

export default function MoviesCardList(save, ...props) {
    const movies = React.useContext(CurrentMovieInfo);
    const location = useLocation();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (window.innerWidth > 1160) {
            setQuantity(12);
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


    }, [movies.length]);

    window.addEventListener('resize', handleResize);

    function handleResize() {
        const more = document.querySelector('.elements__block-more');
        if (movies.length + 4 > quantity) {
            if (window.innerWidth > 1160) {
                more.style.display = "block";
                setQuantity(12);
                return;
            }
            if (window.innerWidth <= 1160) {
                more.style.display = "block";
                setQuantity(12);
                return;
            }
            if (window.innerWidth <= 730) {
                more.style.display = "block";
                setQuantity(9);
                return;
            }
        } else {
            if (window.innerWidth > 1160) {
                more.style.display = "none";
                setQuantity(15);
                return;
            }
            if (window.innerWidth <= 1160) {
                more.style.display = "none";
                setQuantity(10);
                return;
            }
            if (window.innerWidth <= 730) {
                more.style.display = "none";
                setQuantity(7);
                return;
            }
        }
    }

    function handleMore() {
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
            setQuantity(9);
            return;
        }
    }

    // const isLocationMovies = location.pathname === "/saved-movies";
    // const saveMovie = save.some(saved => saved.movieId === movie.id)

    return (
        <>
            {props.loading ? <Preloader /> : <ul className='elements'>
                {movies.slice(0, quantity).map((movie) => {
                    
                    return (
                        <MoviesCard key={movie.id}
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
                            // saveMovie={saveMovie}

                            setMovieSaved={props.setMovieSaved}
                            removeMovieSaved={props.removeMovieSaved}
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