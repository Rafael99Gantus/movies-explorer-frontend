import React from "react";
import './SearchForm.css';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function SearchForm(props) {
    const location = useLocation();

    const isLocationSavedMovies = location.pathname === '/saved-movies';

    const [value, setValue] = useState(props.value);
    const [error, setError] = useState("");
    const [checkbox, setCheckbox] = useState('');


    useEffect(() => {
        setCheckbox(localStorage.getItem('checkbox'))
    }, [checkbox])

    function handleSubmit(e) {
        e.preventDefault();
        if (value === '') {
            setError("Нужно ввести ключевое слово");
            return;
        }
        props.setValue(value)
        props.getMovies(value, props.checkbox);

    }

    function handleSubmitforSavedPage(e) {
        e.preventDefault();
        if (value === '') {
            setError("Нужно ввести ключевое слово");
            return;
        }
        props.setValue(value)
        props.handleSearch(value, props.checkbox);

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
            <form action="" className="searchform__form" onSubmit={isLocationSavedMovies ? handleSubmitforSavedPage : handleSubmit}>
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
                            <input checked={props.checkbox} className="searchfrom__filter_input" type="checkbox" name="Короткометражки" id="checkbox" onClick={props.handleCheckbox} />
                            <span className="searchform__slider"></span>
                        </div>
                        <p className="searchform__text">Короткометражки</p>
                    </label>
                </div>

            </form>
        </main>
    )
}