import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

export default function Login(props) {
    const navigate = useNavigate();

    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [valid, setValid] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateInput = () => {
        setEmailError('');
        setPasswordError('');
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
    };

    function handleMain() {
        navigate('/', { replace: true });
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        validateInput();
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        validateInput();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        props.onLogin(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <main className="login">
                <div className="login__logo" onClick={handleMain} />
                <h1 className="login__title">Рады видеть!</h1>
                <form className="login__form" onSubmit={handleSubmit}>
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
                            value={email}>
                        </input>
                        {emailError && <span className="login__error">{emailError}</span>}
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
                            value={password}>
                        </input>
                        {passwordError && <span className="login__error">{passwordError}</span>}
                    </label>
                    {valid && <button className="login__button" type="submit">Войти</button>}
                    {!valid && <button className="login__button-disabled" disabled type="submit">Войти</button>}
                    <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Зарегистрироваться</Link></p>
                </form>

            </main>
        </>
    )
}