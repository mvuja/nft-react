import React from "react";
import './_benefits.scss';
import EthBtn from '../SmallComponents/EthBtn/EthBtn.jsx'
import MintBtn from '../SmallComponents/MintBtn/MintBtn.jsx'
import bullet from '../../assets/bullet.webp'
import tick from '../../assets/tick.svg'

const Benefits = () => {

    const listitems = [
        {
            id: 1,
            text: 'Exclusive access to BETA-Testing of NFT-2040.',
        },
        {
            id: 2,
            text: 'A fixed number of "Game tokens" per day.',
        },
        {
            id: 3,
            text: 'Exclusive airdrops.',
        },
        {
            id: 4,
            text: 'Distinguishable from others in-game (this may be a cool clan-tag).',
        },
        {
            id: 5,
            text: 'Whitelisted for EVERY wearable drop from NFT:2040.',
        },
        {
            id: 6,
            text: 'Access to a secret channel in our discord.',
        },
    ]

    return (
        <section id="benefits">
            <div className="container">
                <img src={bullet} alt="bullet" />
                <div className="benefits-content">
                    <h2>Exclusive Benefits</h2>
                    <ul className="benefits-list">
                        {
                            listitems.map(listItem => {
                                return (
                                    <li key={listItem.id}>
                                        <img src={tick} alt="" />
                                        {listItem.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="benefeits-btns">
                        <MintBtn />
                        <EthBtn />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits