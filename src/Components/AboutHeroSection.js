import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function AboutHeroSection() {
  return (
    <>
    <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
<div class="container">
    <div class="banner_head">
        <h1>AboutUs</h1>
        <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
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