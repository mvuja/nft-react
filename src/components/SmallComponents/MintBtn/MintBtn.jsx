import React from "react";
import {  Link } from "react-router-dom"
import './_mintBtn.scss';

const MintBtn = () => {

    // const [eth, setEth] = useState(0.1)

    // const ethBtn = () => {
    //     let placeholder = eth
    //     setEth(Math.round((placeholder += .1) * 10) / 10)
    // }

    return (
        <Link to="/crates" className="mint-btn">Mint Your Genesis Crate</Link>
    )
}

export default MintBtn