import React from "react";
import './SearchForm.css';
import { useState } from 'react';

export default function SearchForm(props) {

    const [error, setError] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(props.value === ''){
            setError("Введите что-нибудь");
            return;
        }
        props.getMovies();
        
    }

    function handleChange(event){
        props.setValue(event.target.value);
        setError(null)
    }

    return (
        <main className='searchform'>
            <form action="" className="searchform__form" onSubmit={handleSubmit}>
                <div className="searchform__input-box">
                    <input 
                    className={`searchform__input ${error? "searchform__input_error": ""}`}
                    placeholder={error || "Фильм"} 
                    onChange={handleChange}/>
                    <button className="searchform__button" type="submit" >Поиск</button>
                </div>
                <div className="searchform__block">
                    <label className="searchform__filter-block">
                        <div className="searchform__filter">
                            <input type="checkbox" name="Короткометражки" />
                        </div>
                        <p className="searchform__text">Короткометражки</p>
                    </label>
                </div>

            </form>
        </main>
    )
}