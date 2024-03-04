import React from 'react';
import './Promo.css';

export default function Promo() {
    return (
        <promo className='promo'>
            <div className='promo__text'>
                <p className='promo__big-text'>Учебный проект студента факультета Веб-разработки.</p>
                <p className='promo__small-text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className='promo__info'>Узнать больше</button>
            </div>
            <div className='promo__image'/>

        </promo>
    )
}