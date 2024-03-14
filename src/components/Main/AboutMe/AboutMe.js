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
                    <p className='aboutme__box-description'>Магистр МФ МГТУ им.Баумана, работаю QA инженером в частном проекте. До тестирования работал 2 года инженером по университетскому направлению "Приборостроение", но понял что не моё, поэтому взял курсы по веб-разработке и параллельно нашел работу тестировщиком для плавного вливания в IT сферу. Надеюсь получится как то миновать армейку и начать работать разработчиком.</p>
                    <p className='aboutme__box-git' onClick={git}>Github</p>
                </div>
                <div className='aboutme__box-photo'/>
            </div>
        </section>
    )
}