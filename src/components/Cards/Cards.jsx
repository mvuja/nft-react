import { React, useEffect } from "react";
import './_cards.scss';
import {  Link } from "react-router-dom"

import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const override = css`
    display: block;
    margin: 0 auto;
`;

const color = '#fff'

const Cards = ({firstThreeArticles, promiseInProgress}) => {

    useEffect(() => {
        console.log(promiseInProgress)
    })

    return (
        <section id="cards">
            <div className="container">
                    <h2>Play to Earn, or Play for Fun</h2>
                    {
                        promiseInProgress ?
                        <BeatLoader color={color} css={override} size={20} />
                        :
                        <div className="cards">
                            {
                                firstThreeArticles?.map((el, id) => (
                                    <Link to={`news/${el.title.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`} key={id} className="card">
                                        <div className="img-wrapper">
                                        <img src={el.thumbnail.resolutions[0].url} alt={el.title} />
                                        </div>
                                        <p className="card-heading">{el.title}</p>
                                        {/* <p className="card-body">{el.desc}</p> */}
                                    </Link>
                                ))
                            }

                        </div>
                    }
            </div>
        </section>
    )
}

export default Cards