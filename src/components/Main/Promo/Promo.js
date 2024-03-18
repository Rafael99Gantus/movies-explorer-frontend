import React from 'react';
import './Promo.css';

export default function Promo(props) {

    return (
        <section className='promo'>
            <div className='promo__text'>
                <p className='promo__big-text'>Учебный проект студента факультета Веб-разработки.</p>
                <p className='promo__small-text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href='#about' className='promo__info' type='button' >Узнать больше</a>
            </div>
            <div className='promo__image' />

        </section>
    )
}