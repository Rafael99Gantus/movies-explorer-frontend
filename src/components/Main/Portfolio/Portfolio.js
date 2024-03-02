import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <portfolio className='portfolio'>
            <h1 className='portfolio_title'>Портфолио</h1>
            <div className='portfolio_block'>
                <a className='portfolio_block_link' href='http://ya'>Статичный сайт</a>
                <div className='portfolio_block_button'/>
            </div>

            <div className='portfolio_block'>
                <a className='portfolio_block_link' href='http://ya'>Адаптивный сайт</a>
                <div className='portfolio_block_button'/>
            </div>

            <div className='portfolio_block_last'>
                <a className='portfolio_block_link' href='http://ya'>Одностраничное приложение</a>
                <div className='portfolio_block_button'/>
            </div>

        </portfolio>
    )
}