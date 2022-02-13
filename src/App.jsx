import { React, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx'
import CratesPage from './components/CratesPage/CratesPage.jsx'
import ContactPage from './components/ContactPage/ContactPage.jsx'
import AboutPage from './components/AboutPage/AboutPage.jsx'
import NewsPage from './components/NewsPage/News.jsx'
import NotMatch from './components/NotMatch/NotMatch.jsx'

function App() {


  const [newsId, setNewsId] = useState({})


  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/">
            <HomePage newsId={newsId} setNewsId={setNewsId} />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/crates" component={CratesPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/news">
            <NewsPage newsId={newsId} />
          </Route>
          <Route path="*" component={NotMatch}/>
      </Switch>
      <Footer />
  </>
  );
}

export default App;
