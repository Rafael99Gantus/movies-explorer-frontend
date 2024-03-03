import React from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css"

export default function Header(props) {
    const navigate = useNavigate();
    const location = useLocation();

    function login() {
        localStorage.removeItem('jwt');
        navigate("/sign-in");
        window.location.reload()
    }

    function register() {
        localStorage.removeItem('jwt');
        navigate("/sign-out");
        window.location.reload()
    }

    function goToAccount(){
        navigate("/profile");
        window.location.reload()
    }

    function goToMovies(){
        navigate("/movies");
        window.location.reload()
    }

    function goToSavedMovies(){
        navigate("/saved-movies");
        window.location.reload()
    }
    const isLocationMain = location.pathname === "/";
    const isLocationMovies = location.pathname === "/movies";
    const isLocationSavedMovies = location.pathname === "/saved-movies";
    const isLocationProfile = location.pathname === "/profile";

    return (
        <header className="header">
            <div className="header__logo" />
            <div className="header__container">
                {!props.notLog && <div className='header_unloged_panel'>
                <button className="header__register" onClick={register} type='button'>Регистрация</button> 
                <button className="header__login" onClick={login} type='button'>Войти</button>
                </div>}
                {props.notLog && <div className='header_loged_panel'>
                    <div className='header_panel'>
                        <p className='header_movies' onClick={goToMovies}>Фильмы</p>
                        <p className='header_saved' onClick={goToSavedMovies}>Сохранённые фильмы</p>
                    </div>
                    <div className='header_account'>
                        <p className='header_text' onClick={goToAccount}>Аккаунт</p>
                        {isLocationMain && <div className='header_account_logo' onClick={goToAccount}></div>}
                        {isLocationMovies && <div className='header_account_logomov' onClick={goToAccount}></div>}
                        {isLocationSavedMovies && <div className='header_account_logomov' onClick={goToAccount}></div>}
                        {isLocationProfile && <div className='header_account_logomov' onClick={goToAccount}></div>}
                    </div>
                    </div>}
            </div>
        </header>
    )
}