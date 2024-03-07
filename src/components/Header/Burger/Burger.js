import React from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Burger.css";
import "../Header.css"

export default function Burger(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const isLocationMain = location.pathname === "/";
    const isLocationMovies = location.pathname === "/movies";
    const isLocationSavedMovies = location.pathname === "/saved-movies";
    const isLocationProfile = location.pathname === "/profile";

    const opened = props.openBurger ? 'burger__opened' : 'burger__closed';

    function goToMain() {
        navigate("/");
        window.location.reload()
    }

    function goToMovies() {
        navigate("/movies");
        window.location.reload()
    }

    function goToSavedMovies() {
        navigate("/saved-movies");
        window.location.reload()
    }

    function goToAccount() {
        navigate("/profile");
        window.location.reload()
    }

    return (
        <main>
            <section className={opened}>
                <div className='burger__overlay' />
                {isLocationMain && <div className='burger__menu'>
                    <button className='burger__button-closed' type='button' onClick={props.closeBurger}></button>
                    <p className='burger__main'>Главная</p>
                    <p className='burger__link' onClick={goToMovies}>Фильмы</p>
                    <p className='burger__link' onClick={goToSavedMovies}>Сохраненные фильмы</p>
                    <div className='burger__account' onClick={goToAccount}>
                        <p className='header__text' >Аккаунт</p>
                        <div className='header__account-logomov'></div>
                    </div>
                </div>}

                {isLocationMovies && <div className='burger__menu'>
                    <button className='burger__button-closed' type='button' onClick={props.closeBurger}></button>
                    <p className='burger__link' onClick={goToMain}>Главная</p>
                    <p className='burger__movies'>Фильмы</p>
                    <p className='burger__link' onClick={goToSavedMovies}>Сохраненные фильмы</p>
                    <div className='burger__account' onClick={goToAccount}>
                        <p className='header__text' >Аккаунт</p>
                        <div className='header__account-logomov'></div>
                    </div>
                </div>}

                {isLocationSavedMovies && <div className='burger__menu'>
                    <button className='burger__button-closed' type='button' onClick={props.closeBurger}></button>
                    <p className='burger__link' onClick={goToMain}>Главная</p>
                    <p className='burger__link' onClick={goToMovies}>Фильмы</p>
                    <p className='burger__saved-movies'>Сохраненные фильмы</p>
                    <div className='burger__account' onClick={goToAccount}>
                        <p className='header__text'>Аккаунт</p>
                        <div className='header__account-logomov'></div>
                    </div>
                </div>}

                {isLocationProfile && <div className='burger__menu'>
                    <button className='burger__button-closed' type='button' onClick={props.closeBurger}></button>
                    <p className='burger__link' onClick={goToMain}>Главная</p>
                    <p className='burger__link' onClick={goToMovies}>Фильмы</p>
                    <p className='burger__link' onClick={goToSavedMovies}>Сохраненные фильмы</p>
                    <div className='burger__account-this'>
                        <p className='header__text'>Аккаунт</p>
                        <div className='header__account-logomov'></div>
                    </div>
                </div>}
            </section>
        </main>
    )
}