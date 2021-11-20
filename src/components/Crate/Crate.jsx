import React from "react"
import './_crate.scss'
import CrateImg from '../../assets/crate.png'

const Crate = () => {

    return (
        <section id="crate">
            <div className="container">
                <div className="crate-content">
                    <h2>The Genesis Crate.</h2>
                    <p>The genesis crate is an ERC-721 token (NFT), your "Metakey" into NFT: 2040 game. It unlocks the Arena and all weapons, attacks, armors. Possessing an NFT2040 NFT crate will give you lifetime access to the game, and full ownership to trade or sell on OpenSea.</p>
                    <div className="dark-bg"><p>Only 2500 genesis crates in existence ever to be minted.</p></div>
                    <div className="hero-btns">
                    </div>
                </div>
                <img src={CrateImg} alt="nft crate" />
            </div>
        </section>
    )
}

export default Crate