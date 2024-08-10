import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function PrebookingTrips() {
  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>Prebooking Trips</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>Prebooking Trips </p>
         </div>
      </div>
   </section>
   <section class="prebooking_trips ptb60">
      <div class="container">
         <form method="post" action="#" class="prebooking_form" id="prebooking_form">
            <div class="prebooking_box">
               <div class="booking_grid">
                  <div class="booking_group">
                     <label for="start_place">Start Place</label>
                     <input type="text" name="start_place" id="start_place" placeholder="please enter Start Place" required/> 
                  </div>
                  <div class="booking_group">
                     <label for="arrival_place">Arrival Place</label>
                     <input type="text" name="arrival_place" id="arrival_place" placeholder="please enter Arrival Place" required/> 
                  </div>
               </div>
               <div class="booking_grid">
                  <div class="booking_group">
                     <label for="start_date">Start date</label>
                     <input type="date" name="start_date" id="start_date" placeholder="please Select Start date" required/> 
                  </div>
                  <div class="booking_group">
                     <label for="start_time">Start time</label>
                     <input type="time" name="start_time" id="start_time" placeholder="please Select Start time" required/> 
                  </div>
               </div>
               <div class="booking_grid">
                  <div class="booking_group">
                     <label for="payment_type">Payment type</label>
                        <select id="payment_type" name="payment_type">
                           <option value="">please Select Payment type</option>
                           <option value="credit">Credit Card</option>
                           <option value="debit">Debit Card</option>
                           <option value="paypal">PayPal</option>
                        </select> 
                  </div>
                  <div class="booking_group">
                     <label for="car_category">Select car category</label>
                        <select id="car_category" name="car_category">
                           <option value="">please Select car category</option>
                           <option value="economy">Economy</option>
                           <option value="luxury">Luxury</option>
                           <option value="suv">SUV</option>
                        </select> 
                  </div>
               </div>
               <div class="booking_group">
                  <label for="enter_coupon">coupon</label>
                  <input type="text" name="enter_coupon" id="enter_coupon" placeholder="please enter coupon" required/> 
               </div>
            </div>   
            <button type="submit" value="Prebooking Now" class="prebooking_sub">Prebooking Now</button>
         </form>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default PrebookingTrips