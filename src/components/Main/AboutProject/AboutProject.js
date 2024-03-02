import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
    return (
        <aboutproject className='aboutproject'>
            <h1 className='aboutproject_title'>О проекте</h1>
            <div className='aboutproject_line' />
            <div className='aboutproject_box'>
                <div className='aboutproject_box_about'>
                    <h2 className='aboutproject_title_box'>Дипломный проект включал 5 этапов</h2>
                    <p className='aboutproject_text_box'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='aboutproject_box_about'>
                    <h2 className='aboutproject_title_box'>На выполнение диплома ушло 5 недель</h2>
                    <p className='aboutproject_text_box'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='aboutproject_info'>
                <p className='aboutproject_info_green'>1 неделя</p>
                <p className='aboutproject_info_black'>4 недели</p>
            </div>
            <div className='aboutproject_info'>
                <p className='aboutproject_note_back'>Back-end</p>
                <p className='aboutproject_note_front'>Front-end</p>
            </div>

        </aboutproject>
    )
}