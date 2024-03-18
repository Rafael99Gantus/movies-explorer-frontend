import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader.js'
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({ movies, loading, save, removeSaveMovies, setSaveMovies, setFilteredMovies, el }) {

    const location = useLocation();

    const [quantity, setQuantity] = useState(0);
    const [result, setResult] = useState([]);
    const [more, setMore] = useState(true)

    const isLocationMovies = location.pathname === '/movies';
    const isLocationSavedMovies = location.pathname === '/saved-movies';
    const width = window.innerWidth;

    useEffect(() => {
        if (movies === undefined) {
            setResult([]);
            return;
        } else {
            if (movies.length + 4 < quantity) {
                setMore(false);
            }
            if (isLocationMovies) {
                if (window.innerWidth > 1160 && more) {
                    setQuantity(12);
                }
                if (window.innerWidth <= 1160 && more) {
                    setQuantity(12);
                }
                if (window.innerWidth <= 730 && more) {
                    setQuantity(9);
                }
                setResult(movies.slice(0, quantity));
            } else {
                if (window.innerWidth > 1160) {
                    setQuantity(12);
                }
                if (window.innerWidth <= 1160) {
                    setQuantity(12);
                }
                if (window.innerWidth <= 730) {
                    setQuantity(9);
                }
                setResult(movies);
                return;
            }
        }
        // 
        // return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLocationMovies, movies, quantity]);

    // window.addEventListener('resize', setTimeout(() => {
    //     if (isLocationMovies) {
    //         if (movies.length + 4 > quantity) {
    //             if (window.innerWidth > 1160) {
    //                 setMore(true);
    //                 setQuantity(12);
    //                 return;
    //             }
    //             if (window.innerWidth <= 1160) {
    //                 setMore(true);
    //                 setQuantity(12);
    //                 return;
    //             }
    //             if (window.innerWidth <= 730) {
    //                 setMore(true);
    //                 setQuantity(9);
    //                 return;
    //             }
    //         } else {
    //             if (window.innerWidth > 1160) {
    //                 setMore(true);
    //                 setQuantity(15);
    //                 return;
    //             }
    //             if (window.innerWidth <= 1160) {
    //                 setMore(true);
    //                 setQuantity(10);
    //                 return;
    //             }
    //             if (window.innerWidth <= 730) {
    //                 setMore(true);
    //                 setQuantity(7);
    //                 return;
    //             }
    //         }
    //     }
    //     if (isLocationSavedMovies) {
    //         if (movies.length + 4 > quantity) {
    //             if (window.innerWidth > 1160) {
    //                 setQuantity(12);
    //                 return;
    //             }
    //             if (window.innerWidth <= 1160) {
    //                 setQuantity(12);
    //                 return;
    //             }
    //             if (window.innerWidth <= 730) {
    //                 setQuantity(9);
    //                 return;
    //             }
    //         } else {
    //             if (window.innerWidth > 1160) {
    //                 setQuantity(15);
    //                 return;
    //             }
    //             if (window.innerWidth <= 1160) {
    //                 setQuantity(14);
    //                 return;
    //             }
    //             if (window.innerWidth <= 730) {
    //                 setQuantity(11);
    //                 return;
    //             }
    //         }
    //     }
    // }, 500));


    function handleMore() {
        if (window.innerWidth > 1160) {
            setMore(false);
            setQuantity(15);
            return;
        }
        if (window.innerWidth <= 1160) {
            setMore(false);
            setQuantity(14);
            return;
        }
        if (window.innerWidth <= 730) {
            setMore(false);
            setQuantity(9);
            return;
        }
    }

    return (
        <>
            {loading ? <Preloader /> : <ul className='elements'>
                {result.map((movie) => {
                    return (
                        <MoviesCard key={isLocationMovies ? movie.id : movie.movieId}
                            movie={movie}
                            id={isLocationMovies ? movie.id : movie.movieId}
                            el={el}
                            // setSaved={props.setSaved}
                            save={save}
                            // saveMovie={saveMovie}

                            // setMovieSaved={props.setMovieSaved}
                            removeSaveMovies={removeSaveMovies}
                            setSaveMovies={setSaveMovies}
                        />
                    )
                })}
            </ul>}
            {more && <div className="elements__block">
                <button
                    className="elements__block-more"
                    type="button"
                    onClick={handleMore}
                >Ещё</button>
            </div>}
        </>

    )
}