import React from "react";
import './_cards.scss';

const Cards = () => {

    return (
        <section id="cards">
            <div className="container">
                    <h2>Play to Earn, or Play for Fun</h2>
                    <p>The Funding Fathers have created 4 tiers for the Arena.</p>
                <div className="cards">
                    <div className="card card1">
                        <p className="card-heading">Casual</p>
                        <p className="card-body">Play for fun, no entry fee.</p>
                    </div>
                    <div className="card card2">
                        <p className="card-heading">Mercenary</p>
                        <p className="card-body">Small entry fee, small potential reward.</p>
                    </div>
                    <div className="card card3">
                        <p className="card-heading">Soldier</p>
                        <p className="card-body">Medium entry fee, medium potential reward.</p>
                    </div>
                    <div className="card card4">
                        <p className="card-heading">Warrior</p>
                        <p className="card-body">High entry fee, high reward.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards