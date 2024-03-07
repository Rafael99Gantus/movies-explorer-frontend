import React from "react";
import './SearchForm.css';

export default function SearchForm() {
    // const searchform = document.querySelector('.searchform');
    // const checkbox = searchform.querySelector('.searchform_filter');
    // function check(){
    //     if(this.classList.contains('active')){
    //         checkbox.removeClass('.active')
    //     }else{
    //         checkbox.addClass('.active')
    //     }
    // }

    return (
        <main className='searchform'>
            <form action="" className="searchform__form">
                <div className="searchform__input-box">
                    <input className="searchform__input" placeholder="Фильм" />
                    <button className="searchform__button" type="submit">Поиск</button>
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