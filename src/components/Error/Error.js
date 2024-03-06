import React from "react";
import './Error.css';
import { useNavigate } from "react-router-dom";

export default function Error(){
    const navigate = useNavigate();

    function handleBack(){
        navigate('/');
    }
    return(
        <main>
            <h1 className="error__title">404</h1>
            <p className="error__text">Страница не найдена</p>
            <p className="error__link" onClick={handleBack}>Назад</p>
        </main>
    )
}