import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function AddBalanceForm() {
  return (
    <>
    <Header/>
    <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>Add balance</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>Add balance </p>
         </div>
      </div>
   </section>
   <section class="add_balance ptb60">
      <div class="container">
      	<div class="">
	         <div class="withdraw_inner">
	         	<form class="add_balance_form" id="add_balance_form" method="post" action="#" name="withdraw_form">
	         		<div class="balance_group">
                     <input type="radio" name="card_type" id="prepaid_card"/>
                     <label for="prepaid_card" class="custom_radio"><span class="card_img"> <img src="images/mastercard.webp" /></span>
                        <span> Prepaid card </span>
                     </label>
                  </div>
                  <div class="balance_group">
                     <input type="radio" name="card_type" id="mada"/>
                     <label for="mada" class="custom_radio"><span class="card_img"> <img src="images/Mada.webp" />
                        </span> <span>Mada</span>
                     </label>
                  </div>
                  <div class="balance_group">
                     <input type="radio" name="card_type" id="coupon"/>
                     <label for="coupon" class="custom_radio"><span class="card_img"> <img src="images/shipping-coupon.webp" /></span> 
                        <span>Free shipping coupon</span>
                     </label>
                  </div>
	         		<button type="submit" class="withdraw_sub">Withdraw a balance</button>
         	   </form>
         	</div>
      	</div>
      </div>
   </section>

    <Footer/>
    </>
  )
}

export default AddBalanceForm