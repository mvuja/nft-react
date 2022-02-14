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
          url: 'https://crypto-news14.p.rapidapi.com/news/coindesk',
          headers: {
            'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
            'x-rapidapi-key': '155796a2d6msh2bc847140a19d2bp158d70jsne1f52018a883'
          }
        };
        
        trackPromise(
          axios.request(options).then(function (response) {
            // console.log(response.data)
            setArticles(response.data)
          }).catch(function (error) {
              console.error(error)
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
            <HomePage firstThreeArticles={firstThreeArticles} />
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
            firstThreeArticles?.map((el, id) => (
              <Route key={id} path={`/news/${el.title.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`}>
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
