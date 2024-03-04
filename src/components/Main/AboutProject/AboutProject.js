import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
    return (
        <aboutproject className='aboutproject'>
            <h1 className='aboutproject__title'>О проекте</h1>
            <div className='aboutproject__line' />
            <div className='aboutproject__box'>
                <div className='aboutproject__box-about'>
                    <h2 className='aboutproject__title-box'>Дипломный проект включал 5 этапов</h2>
                    <p className='aboutproject__text-box'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='aboutproject__box-about'>
                    <h2 className='aboutproject__title-box'>На выполнение диплома ушло 5 недель</h2>
                    <p className='aboutproject__text-box'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='aboutproject__info'>
                <p className='aboutproject__info-green'>1 неделя</p>
                <p className='aboutproject__info-black'>4 недели</p>
            </div>
            <div className='aboutproject__info'>
                <p className='aboutproject__note-back'>Back-end</p>
                <p className='aboutproject__note-front'>Front-end</p>
            </div>

        </aboutproject>
    )
}