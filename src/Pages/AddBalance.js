import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function AddBalance() {
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
   <section class="my_wallet add_balance">
      <div class="container">
      	<div class="add_balance_inner">
      		<div class="wallet_bal withdraw_bal">
	            <img src="images/Withdraw-balance.webp" alt="Withdraw-balance"/>
	            <h4>Add balance</h4>
	            <p>Recharge your wallet via Prepaid card</p>
	         </div>
	         <div class="withdraw_inner ptb60">
	         	<form class="add_balance_form" id="add_balance_form" method="post" action="#" name="withdraw_form">
	         		<div class="withdraw_group">
	         			<label for="shipping_card">Shipping card number</label>
	         			<select id="shipping_card">
	         				<option value="Attach a copy of the license">Attach a copy of the license</option>
	         				<option value="Bank of India">Bank of India</option>
	         				<option value="State Bank of India">State Bank of India</option>
	         				<option value="Bank of America">Bank of America</option>
	         			</select>
	         		</div>
	         		<button type="submit" class="withdraw_sub">Add balance</button>
	         	</form>
	         </div>
      	</div>
      </div>
   </section>

    <Footer/>
   </>
  )
}

export default AddBalance