import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';

export default function Register(props){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleName = (e) => {
        setName(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    function handleSubmit(e){
        e.preventDefault();
        navigate('/sign-in', {replace: true});
    }

    return(
        <>
            <main className="register">
                <div className="register__logo"/>
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__form">
                    <label className="register__input">
                        Имя
                        <input
                            className="register__input-name"
                            type="text"
                            required
                            placeholder="Введите имя"
                            minLength="2"
                            maxLength="30"
                            onChange={handleName}
                            value={name.name || ''}>
                        </input>
                    </label>

                    <label className="register__input">
                        E-mail
                        <input
                            className="register__input-name"
                            type="email"
                            required
                            placeholder="Введите E-mail"
                            minLength="2"
                            maxLength="30"
                            onChange={handleEmail}
                            value={email.email || ''}>
                        </input>
                    </label>

                    <label className="register__input">
                        Пароль
                        <input
                            className="register__input-name"
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
                <button className="register__button" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
                <p className="register__text">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
            </main>
        </>
    )
}