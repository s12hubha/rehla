import React, { useEffect, useState } from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { AboutApplication } from '../services/tripService'
function AboutHeroSection() {
  const [aboutus, setAboutus] = useState()

  useEffect(() => {
    aboutApplication();
  }, [])
  const aboutApplication = async () => {
    let { data } = await AboutApplication();
    setAboutus(data?.model[0])
  };
  return (
    <>
      <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
        <div class="container">
          <div class="banner_head">
            <h1>{aboutus?.Title}</h1>
            <p>{aboutus?.Discription}</p>
            {/* <h1>AboutUs</h1> */}
            {/* <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p> */}
          </div>
          <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> ></span> <p>AboutUs </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHeroSection