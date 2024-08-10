import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function CityTourAlUlaSingle() {
  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>City Tour Al-Ula</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>City Tour Al-Ula</p>
         </div>
      </div>
   </section>
   <section class="city_tour ptb60">
      <div class="container">
         <div class="city_tour_box">
            <div class="customer_grid">
               <div class="tourism_box">
                  <img src="images/handsome-businessman.webp" alt="client_img" />
                  <div class="tours_detail">
                     <h5>Ahmed bakry</h5>
                     <p class="tourism_review">
                        <span class="star"><img src="images/star.svg" class="yello" /> </span>
                        <span class="star_count">(4.5) </span> 5 years
                     </p>
                  </div>
               </div>
               <div class="country_charges">
                  <h4>12,500 SAR / hour</h4>
                  <div class="country_flag">
                     <img src="images/united-kingdom.png" alt="united kingdom" />
                     <img src="images/circle_saudi_arabia.png" alt="saudi arabia" />
                  </div>
               </div>
            </div>
            <div class="customer_text">
               <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula </p>
            </div>
         </div>
         <div class="city_tour_box">
            <h3>Captan's instructions</h3>
            <ul class="captan_list">
               <li><img src="images/City-Tour/img1.png" alt="img1"/></li>
               <li><img src="images/City-Tour/img2.png" alt="img2"/></li>
               <li><img src="images/City-Tour/img3.png" alt="img3"/></li>
               <li><img src="images/City-Tour/img4.png" alt="img4"/></li>
               <li><img src="images/City-Tour/img5.png" alt="img5"/></li>
               <li><img src="images/City-Tour/img6.png" alt="img6"/></li>
               <li><img src="images/City-Tour/img7.png" alt="img7"/></li>
            </ul>
         </div>
         <div class="city_tour_box">
            <div class="trip_head">
               <img src="images/City-Tour/car.png" alt="car"/>
               <div class="trip_right">
                  <h3>Vehicle data</h3>
                  <h4>Family Trip XL</h4>
                  <p>Nissan Sunny red - AW 1251</p>
               </div>
            </div>
         </div>
         <div class="city_tour_box">
            <div class="trip_head">
               <h3>Trip programme</h3>
            </div>
            <div class="term_heading">
               <h2>Generate Terms &amp; Conditions</h2>
               <p>By accessing and placing an order with UXTheme, you confirm that you are in greement with and bound by the terms and conditions contained in the Terms Of Use outlined elow.entire website and any emailommunication between you and UXTheme. Under no circumstances shall UXTheme team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arisingout of the use, or the inability to use, the materials on this site, even if UXTheme team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof</p>
            </div>
            <div class="term_heading">
               <h2>Generate Terms &amp; Conditions for websites</h2>
               <p>Creating a Terms &amp; Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms &amp; Conditions fully custumized to your website. Creating a Terms &amp; Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms &amp; Conditions fully custumized to your website.</p>
            </div>
            <div class="term_heading">
               <h2>Generate Terms &amp; Conditions for apps</h2>
               <p>Creating a Terms &amp; Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms &amp; Conditions fully custumized to your website. Creating a Terms &amp; Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms &amp; Conditions fully custumized to your website.</p>
            </div>
            <a href="javascript:void(0)" class="booking_btn" >Book a tour</a>
         </div>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default CityTourAlUlaSingle