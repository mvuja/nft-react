import React, { useState } from "react";
import './_mintBtn.scss';

const MintBtn = () => {

    // const [eth, setEth] = useState(0.1)

    // const ethBtn = () => {
    //     let placeholder = eth
    //     setEth(Math.round((placeholder += .1) * 10) / 10)
    // }

    return (
        <button className="mint-btn">Mint Your Genesis Crate</button>
    )
}

export default MintBtn