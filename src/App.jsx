import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Concept from './components/Concept/Concept.jsx'
import Benefits from './components/Benefits/Benefits.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/">
            <Hero />
            <Concept />
            <Benefits />
          </Route>
          <Route path="/about">
              {/* <About /> */}
          </Route>
          <Route path="*">
              {/* <NotMatch /> */}
          </Route>
      </Switch>
  </>
  );
}

export default App;
