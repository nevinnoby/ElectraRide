import React from 'react'
import headerCSS from './../Header/Header.module.css'
import client1 from './../../assets/user-01.jpg'
import client2 from './../../assets/user-02.jpg'
import client3 from './../../assets/user-03.jpg'

function Header(){
  return (
    <div className={`${headerCSS.Header_Wrapper} section`}>
      <div className={headerCSS.content}>
        <small>For Everyone , every Business , Every Vehicle</small>
        <h1>Unique solutions for <span>Charging Stations</span></h1>
        <p>Electric Stations all across worls come to a new innovative idea.</p>
        <div className={headerCSS.header_btns}>
            <button>Test Drive <i className="ri-roadster-line"></i></button>
            <div className={headerCSS.clients_wrapper}>
                <img src={client1} alt="client-images" />
                <img src={client2} alt="client-images" />
                <img src={client3} alt="client-images" />

                <span>Let's Join US</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
