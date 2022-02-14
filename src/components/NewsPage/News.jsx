import { React, useEffect, useState } from "react";
import './_news.scss';
import arrow from '../../assets/arrow.svg'



const News = props => {
    return (

        // <section id="news">
        //     {Object.keys(props.newsId).length !== 0 ?
        //         <div className="container">
        //             <img className="news-img" src={props.newsId.image} alt={props.newsId.title} />
        //             <p className="news-date">{props.newsId.date}</p>
        //             <h2 className="news-title">{props.newsId.title}</h2>
        //             <p className="news-desc">{props.newsId.desc}</p>
        //             <a className="news-link" href={`https://www.coindesk.com${props.newsId.url}`} target="_blank">See more <img src={arrow} alt="arrow" /></a>
        //         </div>
        //     :
        //     <div className="container container-error">
        //         <h1>404 - PAGE NOT FOUND</h1>
        //     </div>
        //     }
        // </section>

        <section id="news">
            {props.el ?
            <div className="container">
                <img className="news-img" src={props.el.image} alt={props.el.title} />
                <p className="news-date">{props.el.date}</p>
                <h2 className="news-title">{props.el.title}</h2>
                <p className="news-desc">{props.el.desc}</p>
                <a className="news-link" href={`https://www.coindesk.com${props.el.url}`} target="_blank">See more <img src={arrow} alt="arrow" /></a>
            </div>
            :
            <div>djes</div>
            }
        </section>



    )
}

export default News