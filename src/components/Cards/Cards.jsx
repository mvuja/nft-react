import { React, useEffect, useState } from "react";
import './_cards.scss';
import axios from "axios";
import {  Link } from "react-router-dom"

const Cards = props => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-news14.p.rapidapi.com/news/coindesk',
            headers: {
              'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
              'x-rapidapi-key': '155796a2d6msh2bc847140a19d2bp158d70jsne1f52018a883'
            }
          };
          
        axios.request(options).then(function (response) {
            // console.log(response.data)
            setArticles(response.data)
        }).catch(function (error) {
            console.error(error)
        })
    }, [])

    const firstThreeArticles = articles?.slice(0, 3)

    return (
        <section id="cards">
            <div className="container">
                    <h2>Play to Earn, or Play for Fun</h2>
                    {/* <p>The Funding Fathers have created 4 tiers for the Arena.</p> */}
                <div className="cards">
                    {/* <div className="card card1">
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
                    </div> */}
                    {
                        firstThreeArticles?.map((el, id) => (
                            <Link to={`news/${el.title.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '')}`} key={id} className="card" onClick={() => props.setNewsId(el)}>
                                <div className="img-wrapper">
                                <img src={el.image} alt={el.title} />
                                </div>
                                <p className="card-heading">{el.title}</p>
                                <p className="card-body">{el.desc}</p>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Cards