import React from 'react';
import './NavTab.css';

export default function NavTab() {
    return (
        <main className='navtab'>
            <h1 className='navtab__title'>О проекте</h1>
            <div className='navtab__line' />
            <div className='navtab__box'>
                <div className='navtab__box-about'>
                    <h2 className='navtab__title-box'>Дипломный проект включал 5 этапов</h2>
                    <p className='navtab__text-box'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='navtab__box-about'>
                    <h2 className='navtab__title-box'>На выполнение диплома ушло 5 недель</h2>
                    <p className='navtab__text-box'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='navtab__info'>
                <p className='navtab__info-green'>1 неделя</p>
                <p className='navtab__info-black'>4 недели</p>
            </div>
            <div className='navtab__info'>
                <p className='navtab__note-back'>Back-end</p>
                <p className='navtab__note-front'>Front-end</p>
            </div>

        </main>
    )
}