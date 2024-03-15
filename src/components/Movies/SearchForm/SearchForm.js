import React from "react";
import './SearchForm.css';
import { useState } from 'react';

import { CurrentMovieInfo } from '../../contexts/CurrentMovieInfo.js';

export default function SearchForm(props) {

    function checkCheckbox(){
        const checkbox = document.querySelector('.searchfrom__filter_input');
        if (checkbox.checked !== true) {
            console.log("false");
            props.setCheckbox(false)
        } else {
            console.log("Active");
            props.setCheckbox(true)
            
        }
    }

    const [error, setError] = useState("");
    const movies = React.useContext(CurrentMovieInfo);

    function handleSubmit(e) {
        e.preventDefault();
        if (props.value === '') {
            setError("Введите что-нибудь");
            return;
        }
        props.getMovies();

    }

    function handleChange(event) {
        props.setValue(event.target.value);
        setError(null)
    }

    return (
        <main className='searchform'>
            <form action="" className="searchform__form" onSubmit={handleSubmit}>
                <div className="searchform__input-box">
                    <input
                        className={`searchform__input ${error ? "searchform__input_error" : ""}`}
                        placeholder={error || "Фильм"}
                        onChange={handleChange} />
                    <button className="searchform__button" type="submit" >Поиск</button>
                </div>
                <div className="searchform__block">
                    <label className="searchform__filter-block">
                        <div className="searchform__filter" for="checkbox" onClick={checkCheckbox}>
                            <input className="searchfrom__filter_input" type="checkbox" name="Короткометражки" id="checkbox" />
                            <span className="searchform__slider"></span>
                        </div>
                        <p className="searchform__text">Короткометражки</p>
                    </label>
                </div>

            </form>
        </main>
    )
}