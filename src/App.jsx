import React from "react";
import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Testimonials } from './components'

const App = () => {
  return (
    <div className="container">
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App