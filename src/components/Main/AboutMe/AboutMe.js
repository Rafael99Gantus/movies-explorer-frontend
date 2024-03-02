import React from 'react';
import './AboutMe.css';

export default function AboutMe(){
    return(
        <aboutme className='aboutme'>
            <h1 className='aboutme_title'>Технологии</h1>
            <div className='aboutme_line' />
            <div className='aboutme_box'>
                <div className='aboutme_box_note'>
                    <h1 className='aboutme_box_note_name'>Рафаэль</h1>
                    <p className='aboutme_box_note_work'>Веб-разработчик, 25 лет</p>
                    <p className='aboutme_box_note_description'>Рыба, в конце напишу</p>
                    <p className='aboutme_box_note_git'>Github</p>
                </div>
                <div className='aboutme_box_photo'/>
            </div>
        </aboutme>
    )
}