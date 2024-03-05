import React from 'react';
import './AboutMe.css';

export default function AboutMe(){
    return(
        <aboutme className='aboutme'>
            <h1 className='aboutme__title'>Студент</h1>
            <div className='aboutme__line' />
            <div className='aboutme__box'>
                <div className='aboutme__box-note'>
                    <h1 className='aboutme__box-name'>Рафаэль</h1>
                    <p className='aboutme__box-work'>Веб-разработчик, 25 лет</p>
                    <p className='aboutme__box-description'>Рыба, в конце напишу</p>
                    <p className='aboutme__box-git'>Github</p>
                </div>
                <div className='aboutme__box-photo'/>
            </div>
        </aboutme>
    )
}