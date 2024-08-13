import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocalError from '../Components/Error/validationError';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { addBalanceSchema } from '../validationSchema/validationSchema';

function AddBalance() {
   const navigate = useNavigate();
   const handleSubmitForm = async (values) => {
      console.log({ values });
      // let res = await AddTransaction(values)
      // console.log({ res });
      // navigate('/add-balance')
   };
   return (
      <>
         <Header />

         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div class="container">
               <div class="banner_head">
                  <h1>Add balance</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>Add balance </p>
               </div>
            </div>
         </section>
         <section class="my_wallet add_balance">
            <div class="container">
               <div class="add_balance_inner">
                  <div class="wallet_bal withdraw_bal">
                     <img src="images/Withdraw-balance.webp" alt="Withdraw-balance" />
                     <h4>Add balance</h4>
                     <p>Recharge your wallet via Prepaid card</p>
                  </div>
                  <div class="withdraw_inner ptb60">
                     <Formik
                        enableReinitialize
                        initialValues={{ CardNumber: "" }}
                        validationSchema={addBalanceSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                           setSubmitting(true);
                           await handleSubmitForm(values);
                           console.log({ values });
                           resetForm();
                           setSubmitting(false);
                        }}
                     >
                        {({
                           values,
                           errors,
                           touched,
                           handleChange,
                           setFieldValue,
                           handleSubmit
                        }) =>
                        (
                           <form class="add_balance_form" id="add_balance_form" onSubmit={handleSubmit} name="withdraw_form">
                              {/* <form class="add_balance_form" id="add_balance_form" method="post" action="#" name="withdraw_form"> */}
                              <div class="withdraw_group">
                                 <label for="shipping_card">Shipping card number</label>
                                 <select id="CardNumber" onChange={handleChange}>
                                    <option value="Attach a copy of the license">Attach a copy of the license</option>
                                    <option value="Bank of India">Bank of India</option>
                                    <option value="State Bank of India">State Bank of India</option>
                                    <option value="Bank of America">Bank of America</option>
                                 </select>
                              </div>
                              <LocalError touched={touched.CardNumber} error={errors.CardNumber} />
                              <button type="submit" class="withdraw_sub">Add balance</button>
                           </form>
                        )}
                     </Formik>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </>
   )
}

export default AddBalance