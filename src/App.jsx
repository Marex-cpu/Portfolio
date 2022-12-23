import React, { useState } from "react";
import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Qoutes } from './components'

const App = () => {
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <>
      <div id="home" className="container">
        <Header activeLink={activeLink} handleClick={setActiveLink}/>
        <Nav activeLink={activeLink} handleClick={setActiveLink}/>
        <About activeLink={activeLink} handleClick={setActiveLink}/>
        <Experience/>
        <Portfolio/>
        <Qoutes/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App