import { React, useEffect, useState } from "react";
import './_news.scss';
import arrow from '../../assets/arrow.svg'



const News = props => {
    return (
        <section id="news">
            <div className="container">
            <img className="news-img" src={props.newsId.image} alt={props.newsId.title} />
                <p className="news-date">{props.newsId.date}</p>
                <h2 className="news-title">{props.newsId.title}</h2>
                <p className="news-desc">{props.newsId.desc}</p>
                <a className="news-link" href={`https://www.coindesk.com${props.newsId.url}`} target="_blank">See more <img src={arrow} alt="arrow" /></a>
            </div>
        </section>
    )
}

export default News