import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function ForgetPassword() {
  return (
    <>

    <Header/>
    <section class="my_account forget_act">
    <div class="account_inner">
       <div class="account_left" style={{backgroundImage: `url(${'../../images/carefree.webp'})`}}>
          {/* <!-- <img src="images/carefree.webp" alt="account_bg img" /> --> */}
          <div class="white_logo">
             <img src="images/WhiteLogo.webp" alt="white logo image"/>
          </div>
       </div>
       <div class="account_content">
          <img src="images/form_company_logo.webp" alt="company logo image" />
          <h2 class="box_heading">Forget password</h2>
          <p>please enter your phone number</p>
          <form class="login_account create_form forget_pwrd" method="get" action="#/verification" id="forget_pwrd">
          <div class="form_group ">
                 <label for="phone_num">Phone Number*</label>
                 <div class="phone_box">
                    <select id="country_code" name="country_code">
                        <option value="+965">+965</option>
                        <option value="+91">+91</option>
                    </select>
                    <input type="text" id="phone_num" name="phone_num" placeholder="Enter phone number" maxlength="10" minlength="10" required/>
                 </div>
          </div>
          <a href='#/verification'>
          <button type="submit" class="login_button register_btn passwrd_btn">Send</button>
          </a>
      </form>
       </div>
    </div>
 </section>
 <Footer/>
    </>
  )
}

export default ForgetPassword