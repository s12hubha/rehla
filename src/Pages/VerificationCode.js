import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function VerificationCode() {
  return (
    <>
        <Header/>
        <section class="my_account verify_code">
      <div class="account_inner">
         <div class="account_left" style={{backgroundImage: `url(${'../../images/carefree.webp'})`}}>
            {/* <!-- <img src="images/carefree.webp" alt="account_bg img" /> --> */}
            <div class="white_logo">
               <img src="images/WhiteLogo.webp" alt="white logo image"/>
            </div>
         </div>
         <div class="account_content">
            <img src="images/form_company_logo.webp" alt="company logo image" />
            <h2 class="box_heading">Verification code</h2>
            <p>please enter otp 4 digits number that sent to <a href="tel:+2001016171926" target="_blank"> +20 01016171926</a> </p>
            <form method="post" action="#/new-password" id="varify_form" name="varify_form">
               <div class="otp_inputs">
                   <input type="text" maxlength="1" class="otp_input" name="#" id="input1"/>
                   <input type="text" maxlength="1" class="otp_input" name="#" id="input2"/>
                   <input type="text" maxlength="1" class="otp_input" name="#" id="input3"/>
                   <input type="text" maxlength="1" class="otp_input" name="#" id="input4"/>
               </div>
               <button type="submit" value="Send" class="login_button passwrd_btn varify_btn">Send</button>
           </form>
           <div class="create_account resend">
               <p><span id="timer">00:30</span> <a href="#" id="resend_code">Resend code</a></p>
           </div>
         </div>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default VerificationCode