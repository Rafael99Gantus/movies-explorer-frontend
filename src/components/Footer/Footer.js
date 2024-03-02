import React from 'react';
import './Footer.css'

export default function Footer(props) {
    return (
        <footer className='footer'>
            <div className='footer_block'>
                <p className='footer_block_text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className='footer_note'>
                <p className='footer_note_year'>@2024</p>
                <div className='footer_note_block'>
                    <p className='footer_note_yandex'>Яндекс.Практикум</p>
                    <p className='footer_note_git'>Github</p>
                </div>
            </div>
        </footer>
    )
}