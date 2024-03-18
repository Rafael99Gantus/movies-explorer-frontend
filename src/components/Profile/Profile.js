import React from "react";
import { useState } from "react";
import './Profile.css';
import Header from "../Header/Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext)
    const [name, setName] = useState(props.user.name);
    const [email, setEmail] = useState(props.user.email);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');


    const [valid, setValid] = useState(false)
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [edit, setEdit] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        validateInput();
    };
    const handleName = (e) => {
        setName(e.target.value);
        validateInput();
    };

    function handleEdit() {
        setEdit(true);
    };

    const validateInput = () => {
        setEmailError('');
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

        if (!name) {
            setNameError('Поле "Имя" обязательно для заполнения');
            setValid(false);
        } else if (name.length < 2) {
            setEmailError('Имя должно содержать не менее 2 символов');
            setValid(false);
        }
    };

    function handleSaveEdit(e) {
        e.preventDefault()
        setEdit(false)
        console.log({ name: name, email: email })
        props.editProfile({ name, email })
    };

    const user = name !== currentUser.name || email !== currentUser.email;

    return (
        <main>
            <Header loggedIn={props.loggedIn} />
            <div className="profile">
                <p className={props.sucsess ? "profile__sucsess_opened" : "profile__sucsess"}>Данные пользователя успешно изменены</p>
                <h1 className="profile__name">Привет, {props.user.name}!</h1>
                {!edit ?
                    <form className="profile__form" onSubmit={handleSaveEdit}>
                        <label className="profile__input">
                            Имя
                            <input
                                className="profile__input-name"
                                type="text"
                                required
                                placeholder="Введите имя"
                                minLength="2"
                                maxLength="30"
                                disabled={!edit}
                                onChange={handleName}
                                value={name}>
                            </input>
                        </label>

                        <label className="profile__input">
                            E-mail
                            <input
                                className="profile__input-name"
                                type="email"
                                required
                                placeholder="Введите E-mail"
                                minLength="2"
                                maxLength="30"
                                disabled={!edit}
                                onChange={handleEmail}
                                value={email}>
                            </input>
                        </label>
                        {nameError && <span className="profile__error">{nameError}</span>}
                        {emailError && <span className="profile__error">{emailError}</span>}
                        <div className="profile__block">
                            <button className="profile__button-edit" onClick={handleEdit} type="button">Редактировать</button>
                            <button className="profile__button-exit" onClick={props.logOut} type="button">Выйти из аккаунта</button>
                        </div>

                    </form>
                    :
                    <form className="profile__form" onSubmit={handleSaveEdit}>
                        <label className="profile__input">
                            Имя
                            <input
                                className="profile__input-name"
                                type="text"
                                required
                                placeholder="Введите имя"
                                minLength="2"
                                maxLength="30"
                                disabled={!edit}
                                onChange={handleName}
                                value={name}>
                            </input>
                        </label>

                        <label className="profile__input">
                            E-mail
                            <input
                                className="profile__input-name"
                                type="email"
                                required
                                placeholder="Введите E-mail"
                                minLength="2"
                                maxLength="30"
                                disabled={!edit}
                                onChange={handleEmail}
                                value={email}>
                            </input>
                        </label>
                        {nameError && <span className="profile__error">{nameError}</span>}
                        {emailError && <span className="profile__error">{emailError}</span>}
                        {valid && user ?
                            <button className="profile__button-save" onClick={handleSaveEdit} type="submit">Сохранить</button>
                            :
                            <button className="profile__button-save_disabled" disabled >Сохранить</button>}

                    </form>

                }
            </div>
        </main>
    )
}