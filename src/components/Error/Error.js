import React from "react";
import './Error.css';

export default function Error() {

    function handleBack() {
        window.history.back();
    }
    return (
        <main className="error">
            <h1 className="error__title">404</h1>
            <p className="error__text">Страница не найдена</p>
            <p className="error__link" onClick={handleBack}>Назад</p>
        </main>
    )
}