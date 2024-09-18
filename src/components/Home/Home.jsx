import React from 'react'
import './home.css'
import hero from '../../assets/Gleb.png'

const Home = () => {
  return (
    <section id='home' className='container'>
      <div className="home-intro">
        <h2>Hello</h2>
        <h1>I'm Gleb Kostrubov</h1>
        <p>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
        <a href='#contact'>Contact me</a>
      </div>
      <div className="home-img">
        <img src={hero} alt="" />
      </div>
    </section>
  )
}

export default Home
