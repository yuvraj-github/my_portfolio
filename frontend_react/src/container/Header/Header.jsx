import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants';
import { urlFor, client } from '../../client'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [personalInfo, setPersonalInfo] = useState([]);
  const [circleImages, setCircleImages] = useState([]);

  useEffect(() => {
    const query = '*[_type == "personalInfo"]';
    const CircleImgQuery = '*[_type == "circleImages"]';

    client.fetch(query)
      .then((data) => {
        setPersonalInfo(data[0]);
      });
    client.fetch(CircleImgQuery)
      .then((data) => {
        setCircleImages(data);
      });
  }, []);
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>{personalInfo.waveEmoji}</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">{personalInfo.greetings}</p>
              <h1 className="head-text">{personalInfo.name}</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">{personalInfo.designation1}</p>
            <p className="p-text">{personalInfo.designation2}</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={personalInfo.imgUrl && urlFor(personalInfo.imgUrl)} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />

      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {circleImages.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={urlFor(circle.imageurl)} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
export default AppWrap(Header, 'home')