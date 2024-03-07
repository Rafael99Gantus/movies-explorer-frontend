import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css';
import Header from "../Header/Header";

export default function Profile(props) {

    const [name, setName] = useState({ name: props.user.name });
    const [email, setEmail] = useState({ email: props.email.email });

    const [edit, setEdit] = useState(false) ;

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleName = (e) => {
        setName(e.target.value)
    };

    function handleEdit() {
        setEdit(true);
    };

    function handleSaveEdit(e) {
        e.preventDefault()
        setEdit(false)
        props.editProfile(name, email)
    };

    function goToMain(){
        navigate("/");
        window.location.reload()
    };

    return (
        <main>
            <Header notLog={true} />
            <div className="profile">
                <h1 className="profile__name">Привет, {props.user.name}!</h1>
                <form className="profile__form">
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
                            value={name.name || ''}>
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
                            value={email.email || ''}>
                        </input>
                    </label>
                    {!edit ? (<div className="profile__block">
                        <button className="profile__button-edit" onClick={handleEdit} type="button">Редактировать</button>
                        <button className="profile__button-exit" onClick={goToMain} type="button">Выйти из аккаунта</button>
                    </div>) : (
                        <button className="profile__button-save" onClick={handleSaveEdit} type="button">Сохранить</button>
                    )}
                </form>
            </div>
        </main>
    )
}