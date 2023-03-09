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

  useEffect(() => {
    const query = '*[_type == "personalInfo"]';
    client.fetch(query)
      .then((data) => {
        setPersonalInfo(data);
      });
  }, []);
  return (
    <div className="app__header app__flex">
      {personalInfo.map((info) => (
        <>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__header-info"
          >


            <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <span>👋</span>
                <div style={{ marginLeft: 20 }}>
                  <p className="p-text">Hello, I am</p>
                  <h1 className="head-text">{info.name}</h1>
                </div>
              </div>

              <div className="tag-cmp app__flex">
                <p className="p-text">{info.designation1}</p>
                <p className="p-text">{info.designation2}</p>
              </div>
            </div>


          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
          >
            <img src={urlFor(info.imgUrl)} alt="profile_bg" />
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              src={images.circle}
              alt="profile_circle"
              className="overlay_circle"
            />


          </motion.div>
        </>
      ))}

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.php, images.laravel].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
export default AppWrap(Header, 'home')