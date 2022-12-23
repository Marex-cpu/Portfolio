import React from 'react';
import { projects } from '../constants/text';

import '../styles/Portfolio.scss';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolioContainer">
        {projects.map((project) => {
          return (
            <div className='project' key={project.id}>
              <div className="imgContainer">
                <img src={project.imgProject} alt={project.nameProject} />
                <div className="overlay">
                  <div className='doneWith'>
                    {project.technology.map((item) => {
                      return (
                        <span>{item}</span>
                      )
                    })}
                  </div>
                </div>
              </div>
              <p className="nameProject">{project.nameProject}</p>
              <div className="btnContainer">
                <a href={project.gitLink} target='_blank' rel='noreferrer' className='btn btnGit'>Github</a>
                <a href={project.liveLink} target='_blank' rel='noreferrer' className='btn btnLive'>Live</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio