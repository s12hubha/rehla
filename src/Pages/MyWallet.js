import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function MyWallet() {
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
   <section class="my_wallet">
      <div class="container">
         <div class="wallet_bal">
            <img src="images/my-wallet.webp" alt=" wallet cart"/>
            <h4>Wallet balance</h4>
            <h2>350.50 SAR</h2>
         </div>
         <div class="history_box">
            <h4>Wallet history</h4>
            <div class="balance_grid">
               <div class="add_box">
                  <div class="wallet_history">
                     <div class="add_blnc">
                        <h5>Add balance</h5>
                        <p>As a result of charging your wallet via electronic payment, a balance of 12,500 riyals has been added</p>
                     </div>
                     <div class="add_date">
                        <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR  </strong></p>
                     </div>
                  </div>
                  <div class="wallet_history">
                     <div class="add_blnc">
                        <h5>Add balance</h5>
                        <p>As a result of charging your wallet via electronic payment, a balance of 12,500 riyals has been added</p>
                     </div>
                     <div class="add_date">
                        <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR  </strong></p>
                     </div>
                  </div>
                  <a href="javascript:void(0);" class="Withdraw_btn">Withdraw a balance</a>
               </div>
               <div class="withdraw_box">
                   <div class="wallet_history">
                     <div class="add_blnc">
                        <h5>Withdraw a balance</h5>
                        <p>An amount of 12,500 riyals was deducted as a result of withdrawing an amount from the wallet via bank transfer</p>
                     </div>
                     <div class="withdraw_date">
                        <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR </strong></p>
                     </div>
                  </div>
                  <div class="wallet_history">
                     <div class="add_blnc">
                        <h5>Withdraw a balance</h5>
                        <p>An amount of 12,500 riyals was deducted as a result of withdrawing an amount from the wallet via bank transfer</p>
                     </div>
                     <div class="withdraw_date">
                        <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR </strong></p>
                     </div>
                  </div>
                  <a href="javascript:void(0);" class="add_btn">Withdraw a balance</a>
               </div>
            </div>
         </div>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default MyWallet