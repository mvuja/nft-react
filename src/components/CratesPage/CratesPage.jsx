import React, { useState, useEffect } from "react";
import './_cratesPage.scss';
import regular from '../../assets/regular-filter.png';
import common from '../../assets/common-filter.png';
import rare from '../../assets/rare-filter.png';
import epic from '../../assets/epic-filter.png';

import regularCrate from '../../assets/regular-crate.png';
import commonCrate from '../../assets/common-crate.png';
import rareCrate from '../../assets/rare-crate.png';
import epicCrate from '../../assets/epic-crate.png';


const CratesPage = () => {


    const [filter, setFilter] = useState('id')

    const cards = [
        {
            id: 1,
            text: 'Common Crate',
            imageSrc: commonCrate,
            classProgress: 'common',
            progress: 80,
            common: true
        },
        {
            id: 2,
            text: 'Regular Crate',
            imageSrc: regularCrate,
            classProgress: 'regular',
            progress: 90,
            regular: true
        },
        {
            id: 3,
            text: 'Epic Crate',
            imageSrc: epicCrate,
            classProgress: 'epic',
            progress: 10,
            epic: true
        },
        {
            id: 4,
            text: 'Rare Crate',
            imageSrc: rareCrate,
            classProgress: 'rare',
            progress: 30,
            rare: true
        },
        {
            id: 5,
            text: 'Epic Crate',
            imageSrc: epicCrate,
            classProgress: 'epic',
            progress: 40,
            epic: true
        },
        {
            id: 6,
            text: 'Common Crate',
            imageSrc: commonCrate,
            classProgress: 'common',
            progress: 70,
            common: true
        },
        {
            id: 7,
            text: 'Regular Crate',
            imageSrc: regularCrate,
            classProgress: 'regular',
            progress: 95,
            regular: true
        },
        {
            id: 8,
            text: 'Common Crate',
            imageSrc: commonCrate,
            classProgress: 'common',
            progress: 65,
            common: true
        },
    ]


    const filterValueRegular = () => {
        setFilter('regular')
    }
    const filterValueCommon = () => {
        setFilter('common')
    }
    const filterValueRare = () => {
        setFilter('rare')
    }
    const filterValueEpic = () => {
        setFilter('epic')
    }

    const filterAll = () => {
        setFilter('id')
    }

    useEffect(() => {
        const progressBar = document.querySelectorAll('.progress-bar div')
        progressBar.forEach(el => {
            const percent = el.getAttribute('data-size')
            el.style.width = `${percent}%`
        })

        const filterBtns = document.querySelectorAll('.filter-btns button')

        filterBtns.forEach(el => {
            el.addEventListener('click', () => {
                filterBtns.forEach(el => {
                    el.classList.remove('active')
                })
                el.classList.add('active')
            })
        })
      });

    return (
        <section id="crates-page">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-heading">
                        <h1>Mint Your Genesis Crate</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                    </div>
                    <div className="filter-btns">
                        <button className="active" onClick={filterAll}>All</button>
                        <button onClick={filterValueRegular}><img src={regular} alt="Regular" /> Regular</button>
                        <button onClick={filterValueCommon}><img src={common} alt="Common" /> Common</button>
                        <button onClick={filterValueRare}><img src={rare} alt="Rare" /> Rare</button>
                        <button onClick={filterValueEpic}><img src={epic} alt="Epic" /> Epic</button>
                    </div>
                </div>


                <div className="crates">
                    {
                        cards.filter(card => card.hasOwnProperty(filter)).map(filteredCrate => (
                            <div className="crate" key={filteredCrate.id}>
                            <img src={filteredCrate.imageSrc} alt={filteredCrate.text}/>
                            <p className="crate-heading">{filteredCrate.text}</p>

                            <div className="progress-bar">

                                <div className={filteredCrate.classProgress} data-size={filteredCrate.progress}></div>

                            </div>

                            <p className="progress-count">{filteredCrate.progress}% of Crates</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CratesPage