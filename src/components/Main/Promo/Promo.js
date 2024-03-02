import React from 'react';
import './Promo.css';

export default function Promo() {
    return (
        <promo className='promo'>
            <div className='promo_text'>
                <p className='promo_big_text'>Учебный проект студента факультета <br/>Веб-разработки.</p>
                <p className='promo_small_text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className='promo_info'>Узнать больше</button>
            </div>
            <div className='promo_image'/>

        </promo>
    )
}