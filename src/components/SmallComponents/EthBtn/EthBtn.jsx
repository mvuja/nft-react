import React, { useState } from "react";
import './_ethBtn.scss';
import ethImg from '../../../assets/eth.svg';

const MintBtn = () => {

    const [eth, setEth] = useState(0.1)

    const ethBtn = () => {
        let placeholder = eth
        setEth(Math.round((placeholder += .1) * 10) / 10)
    }

    return (
        <button className="eth-btn" onClick={ethBtn}>{eth} <img src={ethImg} alt="ethereum" /></button>
    )
}

export default MintBtn