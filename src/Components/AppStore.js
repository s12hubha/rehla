import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function AppStore() {
  return (
    <>
         <section class="aap_sec ptb100" style={{ backgroundImage: `url(${'.../../images/bg_clr.webp'})` }}>
         <div class="container">
            <div class="sec_head">
                  <h2> Rehla is available for all devices </h2>
                  <p>A Private Limited is the most popular type of partnership Malta. The limited <br/> liabilityis, in fact, the only type of the company allowed by Companies.</p>
               </div>
               <div class="app_store">
                  <a href=""><img src="../../images/App-Store.webp"/> </a>
                  <a href=""><img src="../../images/Play-Store.webp"/> </a>
               </div>
         </div>
      </section>
    </>
  )
}

export default AppStore