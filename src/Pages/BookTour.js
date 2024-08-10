import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function BookTour() {
  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>Book a tour</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>Book a tour</p>
         </div>
      </div>
   </section>
   <section class="prebooking_trips booking_tour ptb60">
      <div class="container">
         <form method="post" action="#" class="book_tour_form" id="book_tour_form">
            <div class="prebooking_box">
               <div class="booking_group">
                  <label for="start_place">Start Place</label>
                  <input type="text" name="start_place" id="start_place" placeholder="please enter Start Place" required/> 
               </div>
               <div class="booking_group">
                     <label for="start_time">Kick Off Time</label>
                     <input type="time" name="start_time" id="start_time" placeholder="please enter Kick Off Time" required/> 
               </div>
               <div class="booking_group">
                  <label for="arrival_place">Seats Count</label>
                  <input type="text" name="arrival_place" id="arrival_place" placeholder="please enter Seats Count" required/> 
               </div>
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
                  <label for="trip_notes">Notes</label>
                  <textarea class="trip_notes" id="trip_notes" placeholder="please enter Trip notes"></textarea> 
               </div>
            </div> 
            <button type="submit" value="Book The Tour Now" class="prebooking_sub booking_sub">Book The Tour Now</button>
         </form>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default BookTour