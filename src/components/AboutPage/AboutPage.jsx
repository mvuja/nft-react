import React from "react";
import './_aboutPage.scss';
import plane from '../../assets/about.webp';
import Crate from '../Crate/Crate.jsx';

const AboutPage = () => {

    return (
        <section id="about">
            <div className="container">
                <div className="hero-content">
                    <h1>About NFT2040: Arena</h1>
                    <p>2040. The financial system has failed. Nation-based reserve currencies have collapsed under hyperinflation, causing governments to fall. After months of global riots and looting, NFT squads now control the world, establishing Ethereum as the world currency. The Funding Fathers of the new world have created a new concept: The Arena.</p>
                </div>
                <img src={plane} alt="plane" />
            </div>
            <Crate />
        </section>
    )
}

export default AboutPage