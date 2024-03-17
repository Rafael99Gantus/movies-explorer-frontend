import React from "react";
import './SearchForm.css';
import { useState } from 'react';

import { CurrentMovieInfo } from '../../contexts/CurrentMovieInfo';

export default function SearchForm(props) {

    const movies = React.useContext(CurrentMovieInfo);

    const [value, setValue] = useState(props.value);
    const [error, setError] = useState("");

    // function checkCheckbox(filterMovies) {
    //     const checkbox = document.querySelector('.searchfrom__filter_input');
    //     if(checkbox.checked === true){
    //         const shortMovies = filterMovies.filter(function (movie) {
    //             return movie.duration <= 40
    //         });
    //         props.setMovie(shortMovies);
    //         console.log(shortMovies);
    //     } else {
    //         props.setMovie(filterMovies);
    //         console.log(filterMovies);
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();
        if (value === '') {
            setError("Нужно ввести ключевое слово");
            return;
        }
        props.setValue(value)
        props.getMovies(value, props.checkbox);

    }

    function handleChange(event) {
        setValue(event.target.value);

        setError(null)
    }

    function stop(ev) {
        ev.stopPropagation();
        console.log('click input');
    }

    return (
        <main className='searchform'>
            <form action="" className="searchform__form" onSubmit={handleSubmit}>
                <div className="searchform__input-box">
                    <input
                        className={`searchform__input ${error ? "searchform__input_error" : ""}`}
                        placeholder={error || "Фильм"}
                        value={value}
                        onChange={handleChange} />
                    <button className="searchform__button" type="submit" >Поиск</button>
                </div>
                <div className="searchform__block">
                    <label className="searchform__filter-block" onClick={stop}>
                        <div className="searchform__filter" >
                            <input isActive={props.checkbox} className="searchfrom__filter_input" type="checkbox" name="Короткометражки" id="checkbox" onClick={props.handleCheckbox}/>
                            <span className="searchform__slider"></span>
                        </div>
                        <p className="searchform__text">Короткометражки</p>
                    </label>
                </div>

            </form>
        </main>
    )
}