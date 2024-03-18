import { React, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css"
import Burger from './Burger/Burger';
import burgerLogo from '../../images/burger-logo.svg';

export default function Header({ loggedIn }) {
    const navigate = useNavigate();
    const location = useLocation();

    const [openBurger, setOpenBurger] = useState(false);

    function login() {
        localStorage.removeItem('jwt');
        navigate("/signin");
    }

    function register() {
        localStorage.removeItem('jwt');
        navigate("/signup");
    }

    function goToMain() {
        navigate("/");
    }

    function goToAccount() {
        navigate("/profile");
    }

    function goToMovies() {
        navigate("/movies");
    }

    function goToSavedMovies() {
        navigate("/saved-movies");
    }
    const isLocationMain = location.pathname === "/";
    const isLocationMovies = location.pathname === "/movies";
    const isLocationSavedMovies = location.pathname === "/saved-movies";
    const isLocationProfile = location.pathname === "/profile";

    const handleOpenBurger = () => {
        setOpenBurger(!openBurger)
    }

    return (
        <>
            <main className={isLocationMain ? "header__main" : "header"}>
                <div className="header__logo" onClick={goToMain} />
                <div className="header__container">
                    {!loggedIn && <div className='header__unloged-panel'>
                        <button className="header__register" onClick={register} type='button'>Регистрация</button>
                        <button className="header__login" onClick={login} type='button'>Войти</button>
                    </div>}
                    {loggedIn && <div className='header__loged-panel'>
                        {isLocationMain && <div className='header__panel'>
                            <p className='header__movies' onClick={goToMovies}>Фильмы</p>
                            <p className='header__saved' onClick={goToSavedMovies}>Сохранённые фильмы</p>
                        </div>}

                        {isLocationProfile && <div className='header__panel'>
                            <p className='header__movies' onClick={goToMovies}>Фильмы</p>
                            <p className='header__saved' onClick={goToSavedMovies}>Сохранённые фильмы</p>
                        </div>}

                        {isLocationMovies && <div className='header__panel'>
                            <p className='header__movies-yes'>Фильмы</p>
                            <p className='header__saved' onClick={goToSavedMovies}>Сохранённые фильмы</p>
                        </div>}

                        {isLocationSavedMovies && <div className='header__panel'>
                            <p className='header__movies' onClick={goToMovies}>Фильмы</p>
                            <p className='header__saved-yes'>Сохранённые фильмы</p>
                        </div>}

                        <div className='header__account'>
                            <p className='header__text' onClick={goToAccount}>Аккаунт</p>
                            {isLocationMain && <div className='header__account-logo' onClick={goToAccount}></div>}
                            {isLocationMovies && <div className='header__account-logomov' onClick={goToAccount}></div>}
                            {isLocationSavedMovies && <div className='header__account-logomov' onClick={goToAccount}></div>}
                            {isLocationProfile && <div className='header__account-logomov' onClick={goToAccount}></div>}
                        </div>
                    </div>}
                    {loggedIn && <button className='header__burger-button' onClick={handleOpenBurger} type="button">
                        <img className='header__burger-icon' src={burgerLogo} alt='Открытие бургера' />
                    </button>}
                </div>
            </main>
            {loggedIn && <Burger openBurger={openBurger} closeBurger={handleOpenBurger} />}
        </>
    )
}