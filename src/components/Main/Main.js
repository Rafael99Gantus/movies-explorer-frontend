import React from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
// import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from "../Footer/Footer.js";

export default function Main(props){
    return(
        <>
        <Header notLog={false}/>
        <main className='main'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
        <Footer />
        </>
    )
}