import React from 'react';
import ProfileImg from '../assets/profile-img-two.jpg';
import { aboutMe } from '../constants/text';

import '../styles/About.scss';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='aboutContainer'>
        <article className="leftContent">
          <div className='imgContainer'>
            <img src={ProfileImg} alt="Me" />
          </div>    
        </article>

        <article className="rightContent">
          <div className='cardsContainer'>
            {aboutMe.map((card) => {
              return (
                <div className='card' key={card.id}>
                  {card.icon}
                  <h3>{card.title}</h3>
                  <p>{card.info}</p>     
                </div>
              )
            })}
          </div>

          <p className='infoAboutMe'>Hello again, <br/>
          My name is Marko Petrović. <br/> 
          My interest in web development started over a couple of years ago. I really like jobs related to computers and technology, and that's why I liked programming. I'm self-taught, I learned through youtube tutorials, and sites like freeCodeCamp, w3schools, and similarly. I am currently looking for a business opportunity as a beginner, and I can't wait to gain experience in this field. At the same time, I do other jobs to support myself. I have various hobbies, I am versatile and I like to learn new things. <br/>
          Feel free to reach out if you’d like to work together!</p>

          <a href="#contact" className='btn btnPrimary'>Let's Talk</a>
        </article>     
      </div>
    </section>
  )
}

export default About