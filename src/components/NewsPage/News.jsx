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

const News = ({el}) => {
    return (

        <section id="news">
            {el ?
            <div className="container">
                <img className="news-img" src={el.thumbnail.resolutions[0].url} alt={el.title} />
                {/* <p className="news-date">{new Date(el.date).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})}</p> */}
                <h2 className="news-title">{el.title}</h2>
                {/* <p className="news-desc">{el.desc}</p> */}
                <a className="news-link" rel="noreferrer" href={el.link} target="_blank">See more <img src={arrow} alt="arrow" /></a>
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