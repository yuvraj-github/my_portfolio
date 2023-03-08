import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss'

const abouts = [
  { title: 'Web Developer', description: 'I am a web developer with a passion for building beautiful and functional web applications and also maintain websites and web applications.', imgUrl: images.about01 },
  { title: 'Frontend Developer', description: 'I am a frontend developer with a passion for creating websites and applications using Reactjs and Nextjs that allow users to access and interact with the site or app.', imgUrl: images.about02 },
  { title: 'Backend Developer', description: 'I am a backend developer with a passion for building code that allows a database and an application to communicate with one another.', imgUrl: images.about03 },
  { title: 'Full Stack Developer', description: 'I am a full stack developer with a passion for building both the front end and the back end of a website and also manages both front and back end systems.', imgUrl: images.about04 },
]
const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span> Good Development</span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{ about.title }</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{ about.description }</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About