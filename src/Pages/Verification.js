import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RequestEmailVerification, RequestUserPhoneVerification } from '../services/tripService';

function Verification() {
   const { userDetails } = useSelector((state) => state.userStore);
   console.log({ userDetails });
   const verifyEmail = async () => {
      let res = await RequestEmailVerification(userDetails?.Email)
      console.log({ res });
   }

   const verifyPhone = async () => {
      let res = await RequestUserPhoneVerification(userDetails?.PhoneNumber)
      console.log({ res });
   }

   return (
      <>
         <Header />

         <section class="varification ptb60">
            <div class="container">
               {/* <form class="varification_form" id="varification_form" name="varification_form" method="post" action="#"> */}
               <div class="varification_grid">
                  <p>Verification</p>
                  <div class="varification_proof">
                     <label for="num_varify" class="proof_contact">
                        <span> <img src="images/smartphone.svg" /></span>
                        <div class="contact_active">
                           <p><strong>Phone Number</strong>
                              <a href={`tel:${userDetails?.PhoneNumber}`}> {userDetails?.PhoneNumber}</a> </p>
                        </div>
                     </label>
                     <div className='flex_itemscenter'>
                        {!userDetails?.IdentityNumberVerified &&<button title='Verify' class="withdraw_sub m-0" onClick={verifyPhone}>Verify</button>}
                        <input type="radio" name="num_varify" class="num_varify" id="num_varify" />
                     </div>
                  </div>
                  <div class="varification_proof">
                     <label for="email_varify" class="proof_contact">
                        <span> <img src="images/mail-message.svg" /></span>
                        <div class="contact_active">
                           <p><strong>Email-address</strong>
                              <a href={`mailto:${userDetails?.Email}"`}> {userDetails?.Email}</a> </p>
                        </div>
                     </label>
                     <div className='flex_itemscenter'>
                        {!userDetails?.EmailVerified && <button title='Verify' class="withdraw_sub m-0" onClick={verifyEmail}>Verify</button>}
                        <input type="radio" name="email_varify" class="email_varify" id="email_varify" />
                     </div>
                  </div>
                  <div class="varification_proof">
                     <label for="id_card" class="proof_contact">
                        <span> <img src="images/id-card.svg" /></span>
                        <div class="contact_active">
                           <p><strong>ID card</strong>
                              <a href="javascript:void(0);">Identification card to increase confidence</a> </p>
                        </div>
                     </label>
                     <input type="radio" name="id_card" class="id_card" id="id_card" />
                  </div>
               </div>
               {/* </form> */}
            </div>
         </section>

         <Footer />
      </>
   )
}

export default Verification