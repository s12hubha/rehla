import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function FeatureCourses() {
  return (
    <>
        <section class="featured ptb100">
         <div class="container">
            <div class="sec_head">
                  <h4>Featured coures</h4>
                  <h2> Charge <span>Rehla</span> Cards Now</h2>
                  <p>An enim nullam tempor sapien gravida donec enim <br/> ipsum porta justo integer at odio velna vitae auctor <br/> integer.</p>
               </div>
            <div class="card_inner pt60">
               <div class="card_box">
                  <img src="../../images/img1.webp" alt="img"/>
                  <div class="card_details">
                     <h3>Rehla - <span>15 SAR</span></h3>
                     <p>Price: <span>15 SAR</span></p>
                     <a href="javascript:void(0);"><span>Charge wallet</span></a>
                  </div>
               </div>
                <div class="card_box">
                  <img src="../../images/img2.webp" alt="img"/>
                  <div class="card_details">
                     <h3>Rehla - <span>50 SAR</span></h3>
                     <p>Price: <span>50 SAR</span></p>
                     <a href="javascript:void(0);"><span>Charge wallet</span></a>
                  </div>
               </div>
                <div class="card_box">
                  <img src="../../images/img3.webp" alt="img"/>
                  <div class="card_details">
                     <h3>Rehla - <span>100 SAR</span></h3>
                     <p>Price: <span>100 SAR</span></p>
                     <a href="javascript:void(0);"><span>Charge wallet</span></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default FeatureCourses