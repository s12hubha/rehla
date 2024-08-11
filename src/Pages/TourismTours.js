import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { GetTouristAreas } from '../services/commonService'
function TourismTours() {
   useEffect(() => {
      // getTouristAreas();
   }, [])
   const getTouristAreas = async () => {
      let res = await GetTouristAreas();
      console.log({ res });
   }
   return (
      <>
         <Header />

         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div class="container">
               <div class="banner_head">
                  <h1>Tourism Tours</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self"> Home </a><span> {'>'}</span> <p>Tourism Tours </p>
               </div>
            </div>
         </section>
         <section class="our_team gallery_team tourism_tours ptb100">
            <div class="container">
               <div class="sec_head">
                  <h2><span>Rehla</span> Tourism Tours </h2>
                  <p>Fully layered dolor sit amet, nobis id expedita <br /> dolores officiis laboriosam.</p>
               </div>
               <div class="team_inner tourism_inner pt60">
                  <div class="card_box">
                     <img src="images/Makkah.webp" alt="img" />
                     <div class="card_details">
                        <h3>Makkah</h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Al-Ula.webp" alt="img" />
                     <div class="card_details">
                        <h3>Al-Ula</h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Al-Ahsa.webp" alt="img" />
                     <div class="card_details">
                        <h3>Al Ahsa</h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Al-Medina.webp" alt="img" />
                     <div class="card_details">
                        <h3>Al-Medina</h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Riyadh.webp" alt="img" />
                     <div class="card_details">
                        <h3>Riyadh</h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Jizan.webp" alt="img" />
                     <div class="card_details">
                        <h3>Jizan</h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/NEOM- TABUk.webp" alt="img" />
                     <div class="card_details">
                        <h3>NEOM- TABUk</h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Taif.webp" alt="img" />
                     <div class="card_details">
                        <h3>Taif </h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Najran.webp" alt="img" />
                     <div class="card_details">
                        <h3>Najran</h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Abha.webp" alt="img" />
                     <div class="card_details">
                        <h3>Abha </h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Jeddah.webp" alt="img" />
                     <div class="card_details">
                        <h3>Jeddah </h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Al-Khobar.webp" alt="img" />
                     <div class="card_details">
                        <h3>Al Khobar </h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Albaha.webp" alt="img" />
                     <div class="card_details">
                        <h3>Albaha </h3>
                     </div>
                  </div>
                  <div class="card_box">
                     <img src="images/Umluj.webp" alt="img" />
                     <div class="card_details">
                        <h3>Umluj </h3>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </>
   )
}

export default TourismTours