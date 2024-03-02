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
        <searchform className='searchform'>
            <form action="" className="searchform__form">
                <div className="searchform_input_box">
                    <input className="searchform_input" placeholder="Фильм" />
                    <button className="searchform_button" type="submit">Поиск</button>
                </div>
                <div className="searchform_block">
                    <label className="searchform_filter_block">
                        <div className="searchform_filter">
                            <input type="checkbox" name="Короткометражки" />
                        </div>
                        <p className="searchform_text">Короткометражки</p>
                    </label>
                </div>

            </form>
        </searchform>
    )
}