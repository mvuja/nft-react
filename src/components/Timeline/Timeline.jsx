import React, { useEffect, useRef } from "react";
import './_timeline.scss';
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { drawSVG } from 'gsap/drawSVG'

const Timeline = () => {

    const svg = useRef()
    
    useEffect(() => {
        const line = document.querySelector('.theLine')
        gsap.timeline({defaults: {duration: 1},
            ScrollTrigger: {
              trigger: svg,
              scrub: true,
              start: "top 65%",
              // markers: true,
              end: "60% center"
            }})
          .from(line, {drawSVG: 0}, 0)
          
          
        //   const main2 = gsap.timeline({defaults: {duration: 1},
        //     scrollTrigger: {
        //       trigger: "#svgMD",
        //       scrub: true,
        //       start: "top center",
        //       // markers: true,
        //       end: "60% center"
        //     }})
        //   .from(".theLineMD", {drawSVG: 0}, 0)
          
        //   const main3 = gsap.timeline({defaults: {duration: 1},
        //     scrollTrigger: {
        //       trigger: "#svgTBL",
        //       scrub: true,
        //       start: "top center",
        //       // markers: true,
        //       end: "60% center"
        //     }})
        //   .from(".theLineTBL", {drawSVG: 0}, 0)
          
        //   const main4 = gsap.timeline({defaults: {duration: 1},
        //     scrollTrigger: {
        //       trigger: "#svgSM",
        //       scrub: true,
        //       start: "top center",
        //       // markers: true,
        //       end: "60% center"
        //     }})
        //   .from(".theLineSM", {drawSVG: 0}, 0)
          
        //   const main5 = gsap.timeline({defaults: {duration: 1},
        //     scrollTrigger: {
        //       trigger: "#svgXSM",
        //       scrub: true,
        //       start: "top center",
        //       // markers: true,
        //       end: "60% center"
        //     }})
        //   .from(".theLineXSM", {drawSVG: 0}, 0)
    })

    return (
        <section id="timeline">

            <div className="container">
                <h2>Superwall Road Map</h2>

                <div className="list list-1">
                    <p>2021 Q3</p>
                    <ul>
                        <li>SuperWall proto-type Development</li>
                        <li>Seed Token Sale - Aug 15th, 2021 *Strategic Partners Only*</li>
                        <li>Private Token Sale - Aug 15th, 2021</li>
                    </ul>
                </div>

                <div className="list list-2">
                    <p>2021 Q3</p>
                    <ul>
                        <li>SuperWall proto-type Development</li>
                        <li>Seed Token Sale - Aug 15th, 2021 *Strategic Partners Only*</li>
                        <li>Private Token Sale - Aug 15th, 2021</li>
                    </ul>
                </div>

                <div className="list list-3">
                    <p>2021 Q3</p>
                    <ul>
                        <li>SuperWall proto-type Development</li>
                        <li>Seed Token Sale - Aug 15th, 2021 *Strategic Partners Only*</li>
                        <li>Private Token Sale - Aug 15th, 2021</li>
                    </ul>
                </div>

                <div className="list list-4">
                    <p>2021 Q3</p>
                    <ul>
                        <li>SuperWall proto-type Development</li>
                        <li>Seed Token Sale - Aug 15th, 2021 *Strategic Partners Only*</li>
                        <li>Private Token Sale - Aug 15th, 2021</li>
                    </ul>
                </div>

                <div className="timeline-container">
                    <svg ref={svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200"> 

                        <defs>
                        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%"   stopColor="#AD00FF"/>
                            <stop offset="60%" stopColor="#FF2156"/>
                            <stop offset="100%" stopColor="#FFD873"/>
                        </linearGradient>
                        </defs>
                
                        <path className="theLine2" 
                        d="M 50,0
                        Q 1000 0 1000 0 
                        T 1000 200
                        Q 0 200 0 200
                        T 0 400
                        Q 1000 400 1000 400
                        T 1000 600
                        Q 900 600 900 600" />

                        <path className="theLine" 
                        d="M 50,0
                        Q 1000 0 1000 0 
                        T 1000 200
                        Q 0 200 0 200
                        T 0 400
                        Q 1000 400 1000 400
                        T 1000 600
                        Q 900 600 900 600" />    

                    </svg>

                    {/* <svg id="svgMD" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200"> 

                        <defs>
                        <linearGradient id="linear2" gradientTransform="rotate(90)" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%"   stop-color="#AD00FF"/>
                            <stop offset="60%" stop-color="#FF2156"/>
                            <stop offset="100%" stop-color="#FFD873"/>
                        </linearGradient>
                        </defs>
                
                        <path className="theLineMD2" 
                        d="M 0,0
                        Q 0 900 0 900" />

                        <path className="theLineMD" 
                        d="M 0,0
                        Q 0 900 0 900" />

                    </svg>

                    <svg id="svgTBL" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200"> 

                        <defs>
                        <linearGradient id="linear2" gradientTransform="rotate(90)" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%"   stop-color="#AD00FF"/>
                            <stop offset="60%" stop-color="#FF2156"/>
                            <stop offset="100%" stop-color="#FFD873"/>
                        </linearGradient>
                        </defs>
                
                        <path className="theLineTBL2" 
                        d="M 0,0
                        Q 0 800 0 800" />

                        <path className="theLineTBL" 
                        d="M 0,0
                        Q 0 800 0 800" />

                    </svg>

                    <svg id="svgSM" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200"> 

                        <defs>
                        <linearGradient id="linear2" gradientTransform="rotate(90)" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%"   stop-color="#AD00FF"/>
                            <stop offset="60%" stop-color="#FF2156"/>
                            <stop offset="100%" stop-color="#FFD873"/>
                        </linearGradient>
                        </defs>
                
                        <path className="theLineSM2" 
                        d="M -45, -45
                        Q -45 700 -45 700" />

                        <path className="theLineSM" 
                        d="M -45, -45
                        Q -45 700 -45 700" />

                    </svg>

                    <svg id="svgXSM" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200"> 

                        <defs>
                        <linearGradient id="linear2" gradientTransform="rotate(90)" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%"   stop-color="#AD00FF"/>
                            <stop offset="60%" stop-color="#FF2156"/>
                            <stop offset="100%" stop-color="#FFD873"/>
                        </linearGradient>
                        </defs>
                
                        <path className="theLineXSM2" 
                        d="M -55, -50
                        Q -55 1000 -55 1000" />

                        <path className="theLineXSM" 
                        d="M -55, -50
                        Q -55 1000 -55 1000" />

                    </svg> */}

                </div>
            </div>
        </section>
    )
}

export default Timeline