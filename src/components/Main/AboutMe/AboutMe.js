import React from 'react';
import './AboutMe.css';

export default function AboutMe(){

    function git(){
        window.open('https://github.com/Rafael99Gantus', '_blank');
    }

    return(
        <section className='aboutme'>
            <h2 className='aboutme__title'>Студент</h2>
            {/* <div className='aboutme__line' /> */}
            <div className='aboutme__box'>
                <div className='aboutme__box-note'>
                    <p className='aboutme__box-name'>Рафаэль</p>
                    <p className='aboutme__box-work'>Веб-разработчик, 25 лет</p>
                    <p className='aboutme__box-description'>Рыба, в конце напишу</p>
                    <p className='aboutme__box-git' onClick={git}>Github</p>
                </div>
                <div className='aboutme__box-photo'/>
            </div>
        </section>
    )
}