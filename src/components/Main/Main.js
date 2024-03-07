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

    let ref1 = React.useRef();

    function scrollTo(ref) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }

    return(
        <>
        <Header notLog={true}/>
        <main className='main'>
            <Promo ref={ref1} scrollTo={scrollTo}/>
            <AboutProject ref={ref1}/>
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
        <Footer />
        </>
    )
}