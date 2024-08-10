import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function Services() {
  return (
    <>
          <section class="service ptb100">
         <div class="container">
            <div class="sec_head">
               <h2> <span>Rehla </span> Services</h2>
               <p>Fully layered dolor sit amet, nobis id expedita <br/> dolores officiis laboriosam.</p>
            </div>
            <div class="service_inner pt60">
               <div class="service_box">
                  <img src="../../images/going.webp"/>
                  <div class="service_content_box">
                     <h3>I'm going to</h3>
                     <p>Passengers order a ride with a local driver to go to another place inside the city Ride-hailing.</p>
                  </div>
               </div>
               <div class="service_box">
                  <img src="../../images/Prebooking-trips.webp"/>
                  <div class="service_content_box">
                     <h3>Prebooking trips</h3>
                     <p>Passengers can make a prebooking trip order with a local driver to go to any place.</p>
                  </div>
               </div>
               <div class="service_box">
                  <img src="../../images/Tourism-Tours.webp"/>
                  <div class="service_content_box">
                     <h3>Tourism Tours</h3>
                     <p>Tourism expert creates a tour of the tourist cities and is searched for by regions.</p>
                  </div>
               </div>
               <div class="service_box">
                  <img src="../../images/Sending-Parcels.webp"/>
                  <div class="service_content_box">
                     <h3>Sending Parcels</h3>
                     <p>Sender offers a parcel to deliver between cities and wait for Rehla captain to accept it.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Services