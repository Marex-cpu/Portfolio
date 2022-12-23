import React from "react";
import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Qoutes } from './components'

const App = () => {
  return (
    <div className="container">
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Qoutes/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App