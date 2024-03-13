import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import api from "../../utils/MainApi.js"

export default function Register(props) {
    const navigate = useNavigate();

    function handleMain(e) {
        e.preventDefault();
        navigate('/', { replace: true });
    }

    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [valid, setValid] = useState(false)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
        validateInput();
    };
    const handleName = (e) => {
        setName(e.target.value);
        validateInput();
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        validateInput();
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password || !name) {
            return
        }
        props.onRegister(name, email, password);
        // setEmail('');
        // setName('');
        // setPassword('');
    }

    const validateInput = () => {
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setValid(true);

        if (!email) {
            setEmailError('Поле "E-mail" обязательно для заполнения');
            setValid(false);
        } else if (email.length < 2) {
            setEmailError('E-mail должен содержать не менее 2 символов');
            setValid(false);
        } else if (!emailValidation.test(email)) {
            setEmailError('Проверьте что поле "E-mail" записано верно');
            setValid(false);
        }

        if (!password) {
            setPasswordError('Поле "Пароль" обязательно для заполнения');
            setValid(false);
        } else if (password.length < 8) {
            setPasswordError('Пароль должен содержать не менее 8 символов');
            setValid(false);
        } else if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
            setPasswordError("Пароль должен содержать минимум одну заглавную букву и одну цифру");
            setValid(false);
        }

        if (!name) {
            setNameError('Поле "Имя" обязательно для заполнения');
            setValid(false);
        } else if (name.length < 2) {
            setEmailError('Имя должно содержать не менее 2 символов');
            setValid(false);
        }
    };

    return (
        <>
            <main className="register">
                <div className="register__logo" onClick={handleMain} />
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__form" onSubmit={handleSubmit}>
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
                            value={name}>
                        </input>
                        {nameError && <span className="register__error">{nameError}</span>}
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
                            value={email}>
                        </input>
                        {emailError && <span className="register__error">{emailError}</span>}
                    </label>

                    <label className="register__input">
                        Пароль
                        <input
                            className="register__input-name"
                            type="password"
                            required
                            placeholder="Введите пароль"
                            minLength="6"
                            maxLength="30"
                            onChange={handlePassword}
                            value={password}>
                        </input>
                        {passwordError && <span className="register__error">{passwordError}</span>}
                    </label>

                    {valid && <button className="register__button" type="submit">Зарегистрироваться</button>}
                    {!valid && <button className="register__button-disabled" type="button" disabled>Зарегистрироваться</button>}
                    <p className="register__text">Уже зарегистрированы? <Link to="/signin" className="register__link">Войти</Link></p>
                </form>

            </main>
        </>
    )
}