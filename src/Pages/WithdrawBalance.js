import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
function WithdrawBalance() {
  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>My Wallet</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>My Wallet </p>
         </div>
      </div>
   </section>
   <section class="my_wallet withdraw_balance">
      <div class="container">
      	<div class="withdraw_inner_box">
      		<div class="wallet_bal withdraw_bal">
	            <img src="images/Withdraw-balance.webp" alt="Withdraw-balance"/>
	            <h4>Wallet balance</h4>
	            <p>The amount will be transferred to your account Within 24 hours</p>
	         </div>
	         <div class="withdraw_inner ptb60">
	         	<form class="withdraw_form" id="withdraw_form" method="post" action="#" name="withdraw_form">
	         		<div class="withdraw_group">
	         			<label for="license">The amount required</label>
	         			<input type="text" name="license" id="license" placeholder="Attach a copy of the license"/>
	         		</div>
	         		<div class="withdraw_group">
	         			<label for="IBAN">IBAN number</label>
	         			<input type="text" name="IBAN" id="IBAN" placeholder="Attach a copy of the license"/>
	         		</div>
	         		<div class="withdraw_group">
	         			<label for="bank_name">Bank Name</label>
	         			<select id="bank_name">
	         				<option value="Attach a copy of the license">Attach a copy of the license</option>
	         				<option value="Bank of India">Bank of India</option>
	         				<option value="State Bank of India">State Bank of India</option>
	         				<option value="Bank of America">Bank of America</option>
	         			</select>
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

export default WithdrawBalance