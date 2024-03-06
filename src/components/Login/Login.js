import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        navigate('/movies', {replace: true});
    }

    return (
        <>
             <main className="login">
                <div className="login__logo"/>
                <h1 className="login__title">Рады видеть!</h1>
                <form className="login__form">
                    <label className="login__input">
                        E-mail
                        <input
                            className="login__input-name"
                            type="email"
                            required
                            placeholder="Введите E-mail"
                            minLength="2"
                            maxLength="30"
                            onChange={handleEmail}
                            value={email.email || ''}>
                        </input>
                    </label>

                    <label className="login__input">
                        Пароль
                        <input
                            className="login__input-name"
                            type="password"
                            required
                            placeholder="Введите пароль"
                            minLength="2"
                            maxLength="30"
                            onChange={handlePassword}
                            value={password.password || ''}>
                        </input>
                    </label>
                </form>
                <button className="login__button" type="submit" onClick={handleSubmit}>Войти</button>
                <p className="login__text">Ещё не зарегистрированы? <Link to="/sign-in" className="login__link">Войти</Link></p>
            </main>
        </>
    )
}