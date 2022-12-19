import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { frontSkills, backSkills } from '../constants/text';

import '../styles/Experience.scss';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='experienceContainer'>
        <article className="frontSkills">
          <h3 className='heading'>Frontend Development</h3>
          <div className="containerSkills">
            {frontSkills.map((skill) => {
              return (
                <div className="skill" key={skill.id}>
                  <p className='title'><AiFillCheckCircle width={20} className='icon'/> {skill.title}</p>
                  <p className='level'>{skill.level}</p>
                </div>
              )
            })}
          </div>
        </article>
        
        <article className='backSkills'>
          <h3 className='heading'>Backend Development</h3>
          <div className="containerSkills">
            {backSkills.map((skill) => {
              return (
                <div className="skill" key={skill.id}>
                  <p className='title'><AiFillCheckCircle width={20} className='icon'/> {skill.title}</p>
                  <p className='level'>{skill.level}</p>
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience