import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import video from '../../assets/video/bg car.mp4'

const Home = () => {
  return (
    <div>
      <Navbar/>
 <div className="hero">
  {/* Video Background */}
  <video autoPlay loop muted playsInline className="bg-video">
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content */}

  <div className="hero-content">
    <h1>THE FUTURE OF <br />MOBILITY IS HERE</h1>
    <p>Discover the safest self-driving experience with Autono.</p>
  </div>
</div>
<section className='main'>
hello
</section>
    </div>
  )
}

export default Home