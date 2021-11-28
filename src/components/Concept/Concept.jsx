import React from "react";
import './_concept.scss';
import videoPlaceholder from '../../assets/video-placeholder.png';
import PlayBtn from '../PlayBtn/PlayBtn.jsx'

const Concept = () => {

    return (
        <main id="concept-main">

        <section id="concept">
            <div className="container">
                <h2>Concept.</h2>
                <p>Drop your own humanoid NFT avatar onto the Arena and compete to be the last fighter standing, using a wide range of weapons, from handguns to bombs, air support, laser guns, or special community attacks. You have the choice between two modes. Casual, or play to earn. You don't have a 3D avatar but want to fight in the arena ? A stock in-game 3D avatar will be available to all crate owners.</p>
            </div>
        </section>
            <div className="video">
                <img src={videoPlaceholder} alt="video" />
                <PlayBtn />
            </div>
        </main>
    )
}

export default Concept