import React from 'react';
import './Techs.css';

export default function Techs(){
    return(
        <techs className='techs'>
            <h1 className='techs_title'>Технологии</h1>
            <div className='techs_line' />
            <h2 className='techs_subtitle'>7 технологий</h2>
            <p className='techs_text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='techs_blocks'>
                <div className='techs_block'>HTML</div>
                <div className='techs_block'>CSS</div>
                <div className='techs_block'>JS</div>
                <div className='techs_block'>React</div>
                <div className='techs_block'>Git</div>
                <div className='techs_block'>Express.js</div>
                <div className='techs_block'>mongoDB</div>
            </div>
        </techs>
    )
}