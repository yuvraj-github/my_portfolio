import React, { useState, useEffect } from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {
  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    const query = '*[_type == "personalInfo"]';
    client.fetch(query)
      .then((data) => {
        setPersonalInfo(data[0]);
      });
  }, []);
  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me.</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href={`mailto:${personalInfo.email}`} className='p-text'>{personalInfo.email}</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href={`tel: ${personalInfo.countryCode}${personalInfo.mobile}`} className='p-text'>({personalInfo.countryCode}) {personalInfo.mobile}</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');