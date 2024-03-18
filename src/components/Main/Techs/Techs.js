import React from 'react';
import './Techs.css';

export default function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>

            <p className='techs__subtitle'>7 технологий</p>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='techs__blocks'>
                <div className='techs__block'>HTML</div>
                <div className='techs__block'>CSS</div>
                <div className='techs__block'>JS</div>
                <div className='techs__block'>React</div>
                <div className='techs__block'>Git</div>
                <div className='techs__block'>Express.js</div>
                <div className='techs__block'>mongoDB</div>
            </div>
        </section>
    )
}