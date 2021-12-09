import { React } from 'react'
import { Route, Switch } from 'react-router-loading'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx'
import CratesPage from './components/CratesPage/CratesPage.jsx'
import ContactPage from './components/ContactPage/ContactPage.jsx'
import AboutPage from './components/AboutPage/AboutPage.jsx'
import NotMatch from './components/NotMatch/NotMatch.jsx'
import { topbar } from "react-router-loading";

function App() {

  topbar.config({
    autoRun: false,
    barThickness: 4,
    barColors: {
        0: 'rgb(45, 194, 205)',
        1.0: 'rgb(67, 92, 254)'
    },
    className: 'topbar'
  });

  return (
    <>
      <Navbar />
      <Switch maxLoadingTime={700}> 
          <Route exact path="/" component={HomePage} loading />
          <Route path="/about" component={AboutPage} loading />
          <Route path="/crates" component={CratesPage} loading />
          <Route path="/contact" component={ContactPage} loading />
          <Route path="*" component={NotMatch} loading />
      </Switch>
      <Footer />
  </>
  );
}

export default App;
