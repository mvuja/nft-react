import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Concept from './components/Concept/Concept.jsx'
import Benefits from './components/Benefits/Benefits.jsx'
import Crate from './components/Crate/Crate.jsx'
// import Timeline from './components/Timeline/Timeline.jsx'
import Cards from './components/Cards/Cards.jsx'
import Footer from './components/Footer/Footer.jsx'
import CratesPage from './components/CratesPage/CratesPage.jsx'
import ContactPage from './components/ContactPage/ContactPage.jsx'
import AboutPage from './components/AboutPage/AboutPage.jsx'
import NotMatch from './components/NotMatch/NotMatch.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/">
            <Hero />
            <Concept />
            <Benefits />
            <Crate />
            {/* <Timeline /> */}
            <Cards />
          </Route>
          <Route path="/about">
              <AboutPage />
          </Route>
          <Route path="/crates">
            <CratesPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="*">
              <NotMatch />
          </Route>
      </Switch>
      <Footer />
  </>
  );
}

export default App;
