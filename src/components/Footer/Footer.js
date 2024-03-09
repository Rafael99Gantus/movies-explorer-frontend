import React from 'react';
import './Footer.css'

export default function Footer(props) {


    function ya(){
        window.open('https://practicum.yandex.ru/', '_blank');
    }
    
    function git(){
        window.open('https://github.com/Rafael99Gantus', '_blank');
    }

    return (
        <main className='footer'>
            <div className='footer__block'>
                <p className='footer__block-text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className='footer__note'>
                <p className='footer__note-year'>@2024</p>
                <div className='footer__note-block'>
                    <p className='footer__note-yandex' onClick={ya}>Яндекс.Практикум</p>
                    <p className='footer__note-git' onClick={git}>Github</p>
                </div>
            </div>
        </main>
    )
}