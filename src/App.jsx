import { React, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx'
import CratesPage from './components/CratesPage/CratesPage.jsx'
import ContactPage from './components/ContactPage/ContactPage.jsx'
import AboutPage from './components/AboutPage/AboutPage.jsx'
import NewsPage from './components/NewsPage/News.jsx'
import NotMatch from './components/NotMatch/NotMatch.jsx'

import axios from "axios";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

function App() {

  // NEWS API

  const [articles, setArticles] = useState(null)

  useEffect(() => {
      const options = {
          method: 'GET',
          url: 'https://yahoo-finance127.p.rapidapi.com/news/tsla',
          headers: {
            'X-RapidAPI-Key': 'd24265ecc8msh1bac037784ae606p1e9c97jsn2046b3c50b91',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
          }
        };
        
        trackPromise(
          axios.request(options).then(function (response) {
            setArticles(Object.values(response.data))
            console.log(response.data, 'lol')
          }).catch(function (error) {
              console.error(error)
              console.log(error, 'lol')
          })
        )

  }, [])

  const firstThreeArticles = articles?.slice(0, 3)



  // LOADER

  const { promiseInProgress } = usePromiseTracker()


  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/">
            <HomePage firstThreeArticles={firstThreeArticles} promiseInProgress={promiseInProgress} />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/crates" component={CratesPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route exact path='/news'>
              <NotMatch/>
          </Route>
          {
            (promiseInProgress === true) ?
              <Route path='/news'>
                <NewsPage/>
              </Route>
            :
            firstThreeArticles?.map((el) => (
              <Route key={el.uuid} path={`/news/${el.title.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`}>
                <NewsPage el={el} />
              </Route>
            ))
          }


          <Route path="*" component={NotMatch}/>
      </Switch>
      <Footer />
  </>
  );
}

export default App;
