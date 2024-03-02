import React from 'react';
import './NavTab.css';

export default function NavTab() {
    return (
        <navtab className='navtab'>
            <h1 className='navtab_title'>О проекте</h1>
            <div className='navtab_line' />
            <div className='navtab_box'>
                <div className='navtab_box_about'>
                    <h2 className='navtab_title_box'>Дипломный проект включал 5 этапов</h2>
                    <p className='navtab_text_box'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='navtab_box_about'>
                    <h2 className='navtab_title_box'>На выполнение диплома ушло 5 недель</h2>
                    <p className='navtab_text_box'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='navtab_info'>
                <p className='navtab_info_green'>1 неделя</p>
                <p className='navtab_info_black'>4 недели</p>
            </div>
            <div className='navtab_info'>
                <p className='navtab_note_back'>Back-end</p>
                <p className='navtab_note_front'>Front-end</p>
            </div>

        </navtab>
    )
}