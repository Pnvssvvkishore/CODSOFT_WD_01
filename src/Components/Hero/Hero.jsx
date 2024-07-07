import React from 'react';
import './Hero.css';
import resume from '../../assets/resume.pdf';
import profile_photo from '../../assets/profile_photo.svg.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img 
        src={profile_photo} 
        alt="Profile"
      />
      <h1><span>I'm Ponnada Naga Venkata Siva Sai Veera Viswa Kishore,</span>frontend developer</h1>
      <p>I am a front end developer from India</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} download="Ponnada_Naga_Venkata_Siva_Sai_Veera_Viswa_Kishore_Resume.pdf">My resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
