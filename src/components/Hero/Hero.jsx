import React, { useState } from "react";
import './_hero.scss';
import heroImg from '../../assets/hero-image.png';
import ethImg from '../../assets/eth.svg';

const Hero = () => {

    const [eth, setEth] = useState(0.1)

    const ethBtn = () => {
        let placeholder = eth
        setEth(Math.round((placeholder += .1) * 10) / 10)
    }

    return (
        <section id="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>The first 3D Battle Royale Shooter for NFTs</h1>
                    <p>2040. The financial system has failed. Nation-based reserve currencies have collapsed under hyperinflation, causing governments to fall. After months of global riots and looting, NFT squads now control the world, establishing Ethereum as the world currency. The Funding Fathers of the new world have created a new concept: The Arena.</p>
                    <div className="hero-btns">
                    <button className="btn">Mint Your Genesis Crate</button>
                    <button className="eth-btn" onClick={ethBtn}>{eth} <img src={ethImg} alt="ethereum" /></button>
                    </div>
                </div>
                <img src={heroImg} alt="nft gun" className="hero-img" />
            </div>
        </section>
    )
}

export default Hero