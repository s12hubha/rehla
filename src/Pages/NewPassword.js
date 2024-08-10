import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function NewPassword() {
  return (
    <>
        <Header/>

        <section class="my_account new_pswd">
      <div class="account_inner">
         <div class="account_left" style={{backgroundImage: `url(${'../../images/carefree.webp'})`}}>
            {/* <!-- <img src="images/carefree.webp" alt="account_bg img" /> --> */}
            <div class="white_logo">
               <img src="images/WhiteLogo.webp" alt="white logo image"/>
            </div>
         </div>
         <div class="account_content">
            <img src="images/form_company_logo.webp" alt="company logo image" />
            <h2 class="box_heading">New password</h2>
            <p>Please enter new password</p>
            <form class="login_account new_password" method="post" action="#" id="new_password">
            <div class="form_group">
                   <label for="password1">Password*</label>
                   <div class="password_box">
                       <input type="password" id="password1" name="password1" class="password_input" placeholder="Password" required/>
                       <span class="show_password" onclick="togglePassword('password1')">👁️</span>
                   </div>
               </div>
               <div class="form_group">
                   <label for="password2">Password*</label>
                   <div class="password_box">
                       <input type="password" id="password2" name="password2" class="password_input" placeholder="Password" required />
                       <span class="show_password" onclick="togglePassword('password2')">👁️</span>
                   </div>
               </div>
            <button type="submit" class="login_button register_btn passwrd_btn" value="Change password">Change password</button>
        </form>
         </div>
      </div>
   </section>

        <Footer/>
    </>
  )
}

export default NewPassword