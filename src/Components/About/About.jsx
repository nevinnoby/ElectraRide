import React from 'react';
import aboutCSS from './../About/About.module.css'
import aboutImg1 from './../../assets/about-img-.jpg'
import aboutImg2 from './../../assets/about-img-1.jpg'
import about_card_img1 from './../../assets/about-card01.png'
import about_card_img2 from './../../assets/about-card02.png'
function About() {
  return (
    <div className={`${aboutCSS.About_wrapper} section`}>
        <div className={aboutCSS.counters}>
            <p>7.5M+ <span>Charging Station Initiated</span></p>
            <p>12K+ <span>Charging Station in Network</span></p>
            <p>80% <span>Eco Friendly Charging Stations</span></p>
            <p>120+ <span>Charging Stations In this Region</span></p>
        </div>
      <div className={aboutCSS.about}>
        <div className={aboutCSS.about_img}>
            
            <img src={aboutImg1} alt="about-images" />
            <img src={aboutImg2} alt="about-images" />
        </div>
        <div className={aboutCSS.about_content}>
            <small className="section_title">(About Us)</small>
            <h2>Solutions of All EC <br /> <span>Charging Solutions</span></h2>
            <p>
                Charging stations are powered with all new adaptive charging system which increases the efficiency and reduce timew of chaging
            </p>
            <div className={aboutCSS.about_Cards}>
                <div className={aboutCSS.card}>
                    <img src={about_card_img1} alt="about-card-li" />
                    <h3>Warrenty <br />Extensions</h3>
                    <p>warranty claims can be issued easily now</p>
                </div>
                <div className={aboutCSS.card}>
                    <img src={about_card_img2} alt="about-card-li" />
                    <h3>Spare Parts <br />Management</h3>
                    <p>Buying and selling of spare parts can be managed easily now!</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
