import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { useSelector } from 'react-redux'

function MyPreferences() {
   const { preferences } = useSelector(state => state?.preferenceStore);
   console.log({ preferences });
   return (
      <>
         <Header />
         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div class="container">
               <div class="banner_head">
                  <h1>My Preferences</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>My Preferences </p>
               </div>
            </div>
         </section>
         <section class="my_preferences ptb60">
            <div class="container">
               <div class="preferences_box">
                  <p><span><img src="images/Preferences/Smoking.svg" alt="Smoking" /></span>Smoking </p>
                  <label class="switch">
                     <input type="checkbox" required checked={preferences?.LikeSmoking} />
                     <span></span>
                  </label>
               </div>
               <div class="preferences_box">
                  <p><span><img src="images/Preferences/Air-conditioning.svg" alt="Air conditioning" /></span> Air conditioning </p>
                  <label class="switch">
                     <input type="checkbox" required checked={preferences?.HaveAirCondition} />
                     <span></span>
                  </label>
               </div>
               <div class="preferences_box">
                  <p><span><img src="images/Preferences/Music.svg" alt="Music" /></span> Music </p>
                  <label class="switch">
                     <input type="checkbox" required checked={preferences?.LikeMusic} />
                     <span></span>
                  </label>
               </div>
               <div class="preferences_box">
                  <p><span><img src="images/Preferences/Chating.svg" alt="Chating" /></span> Chating </p>
                  <label class="switch">
                     <input type="checkbox" required checked={preferences?.LikeSpeaking} />
                     <span></span>
                  </label>
               </div>
               <div class="preferences_box">
                  <p><span><img src="images/Preferences/car-charger.svg" alt="car charger" /></span> car charger </p>
                  <label class="switch">
                     <input type="checkbox" required checked={preferences?.HaveChargeMobile} />
                     <span></span>
                  </label>
               </div>
               <div class="preferences_box">
                  <p> <span><img src="images/Preferences/suitcase.svg" alt="suitcase" /></span> suitcase</p>
                  <label class="switch">
                     <input type="checkbox" required checked={preferences?.LikePets} />
                     <span></span>
                  </label>
               </div>
               <div class="preferences_box">
                  <p> <span><img src="images/Preferences/Wifi.svg" alt="Wifi" /></span> Wifi </p>
                  <label class="switch">
                     <input type="checkbox" required checked={preferences?.HaveWifi} />
                     <span></span>
                  </label>
               </div>
               <div class="preferences_box">
                  <p> <span><img src="images/Preferences/Display-Screen.svg" alt="Smoking" /></span> Display Screen </p>
                  <label class="switch">
                     <input type="checkbox" required checked={preferences?.DeliverPost} />
                     <span></span>
                  </label>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default MyPreferences