import React from 'react'
import featureCSS from './../Features/Features.module.css'
import img1 from './../../assets/features.jpg'
function Features(){
  return (
    <div className={`${featureCSS.Features_wrapper} section`}>
       <small className="section_title">(Main Features)</small>
       <h2>Elevate Your <span>ECO -Journey</span> </h2>
       <p>Step into the future with electric vehicles—where innovation meets sustainability, offering a cleaner, quieter ride while reducing emissions and paving the way for a greener, more eco-friendly world.</p>

        <div className={featureCSS.features_Cards}>
            <div className={featureCSS.featureCard}>
                <img src={img1} alt="features-card-image" />
                <i className="ri-play-line"></i>
            </div>
            <div className={featureCSS.featureCard}>
                <div className={featureCSS.cardContainer}>
                    <small>Technology</small>
                    <h3>Smart Technology</h3>
                    <p>Smart technology simplifies life, making everyday tasks more efficient and connected.</p>
                </div>
                <div className={featureCSS.cardContainer}>
                <small>Connectivity</small>
                    <h3>Smart Connectivity</h3>
                    <p>With all new hybrid connectivity.</p>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
