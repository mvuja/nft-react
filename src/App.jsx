import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/">
            <Hero />
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
