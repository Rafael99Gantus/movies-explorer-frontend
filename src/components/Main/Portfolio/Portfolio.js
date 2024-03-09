import React from 'react';
import './Portfolio.css';

export default function Portfolio() {

    function staticWeb(){
        window.open('https://github.com/Rafael99Gantus/russian-travel', '_blank');
    }

    function adaptivWeb(){
        window.open('https://github.com/Rafael99Gantus/mesto', '_blank');
    }

    function web(){
        window.open('https://github.com/Rafael99Gantus/react-mesto-api-full-gha', '_blank');
    }

    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__block' onClick={staticWeb}>
                <p className='portfolio__block-link' >Статичный сайт</p>
                <div className='portfolio__block-button'/>
            </div>

            <div className='portfolio__block' onClick={adaptivWeb}>
                <p className='portfolio__block-link' >Адаптивный сайт</p>
                <div className='portfolio__block-button'/>
            </div>

            <div className='portfolio__block-last' onClick={web}>
                <p className='portfolio__block-link'>Одностраничное приложение</p>
                <div className='portfolio__block-button'/>
            </div>

        </section>
    )
}