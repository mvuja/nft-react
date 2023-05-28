import React from "react";
import Hero from '../Hero/Hero.jsx'
import Concept from '../Concept/Concept.jsx'
import Benefits from '../Benefits/Benefits.jsx'
import Crate from '../Crate/Crate.jsx'
import Cards from '../Cards/Cards.jsx'


const HomePage = ({firstThreeArticles, promiseInProgress}) => {
    return (
        <>
            <Hero />
            <Concept />
            <Benefits />
            <Crate />
            <Cards firstThreeArticles={firstThreeArticles} promiseInProgress={promiseInProgress} />
        </>
    )
}

export default HomePage