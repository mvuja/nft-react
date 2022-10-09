import { React } from "react";
import './_news.scss';
import arrow from '../../assets/arrow.svg'

import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";

const override = css`
    display: block;
    margin: 0 auto;
`;

const color = '#fff'

const News = props => {
    return (

        <section id="news">
            {props.el ?
            <div className="container">
                <img className="news-img" src={props.el.image} alt={props.el.title} />
                <p className="news-date">{new Date(props.el.date).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})}</p>
                <h2 className="news-title">{props.el.title}</h2>
                <p className="news-desc">{props.el.desc}</p>
                <a className="news-link" rel="noreferrer" href={`${props.el.url}`} target="_blank">See more <img src={arrow} alt="arrow" /></a>
            </div>
            :
            <div className="container container-loader">
                <PacmanLoader color={color} css={override} size={40} />
            </div>
            }
        </section>

    )
}

export default News