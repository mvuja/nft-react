import {React, useState, useEffect} from "react";
import './_footer.scss';
import logo from '../../assets/logo.svg';

const Footer = () => {

    const [date, setDate] = useState('')


    useEffect(() => {
        setDate(new Date().getFullYear())
    }, [])

    return (
       <footer>
           <div className="container">
                <img src={logo} alt="nft" />
                <p className="bold">Be part of the NFT gaming revolution.</p>
                <p className="copy">© Copyright {date} NFT2040:Arena. All rights reserved.</p>
           </div>
       </footer>
    )
}

export default Footer