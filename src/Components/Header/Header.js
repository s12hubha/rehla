import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import '../../css/reset.css';
import '../../css/responsive.css';
import '../../css/glightbox.css';
import { useSelector } from 'react-redux';
import EditProfile from '../../Pages/EditProfile';
import { BellIconSvg, EditProfileSVG, HeartSvg, LogoutIconSvg, PathSvg, ReservationIconSvg, ShieldSvg, StarSvg, TravllerSvg, WalletSvg } from '../../assets/svgs';
import { ROUTESCONSTANTS } from '../../constants/authConstants';

function Header() {
  const [isHeaderShown, setIsHeaderShown] = useState(false);
  const [showNavBar,setShowNavBar]= useState(false)
  const userData = useSelector((state) => state.userStore);
  const {isAuth}=userData
  const wrapperRef = useRef(null);
  const handleToggle = () => {
    setIsHeaderShown(!isHeaderShown);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
       
        setShowNavBar(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
 const HeadNav=[
  {title:"Edit Profile",path:ROUTESCONSTANTS?.EDIT_PROFILE,icon:<EditProfileSVG/>},
  {title:"My Trips",path:ROUTESCONSTANTS?.MY_TRIP,icon:<PathSvg/>},
  {title:"My Reservation",path:"",icon:<ReservationIconSvg/>},
  {title:"My Wallet",path:ROUTESCONSTANTS?.MY_WALLET,icon:<WalletSvg/>},
  {title:"My Rates",path:ROUTESCONSTANTS?.MY_RATES,icon:<StarSvg/>},
  {title:"My Preferences",path:ROUTESCONSTANTS?.MY_PREFERENCE,icon:<HeartSvg/>},
  {title:"Verification",path:ROUTESCONSTANTS?.VERIFICATION,icon:<ShieldSvg/>},
  {title:"Notification",path:ROUTESCONSTANTS?.VERIFICATIONS,icon:<BellIconSvg/>},
  {title:"Register as Traveler",path:ROUTESCONSTANTS?.REGISTER_TRAVELER,icon:<TravllerSvg/>},
  {title:"Logout",path:ROUTESCONSTANTS?.LOGOUT,icon:<LogoutIconSvg/>},
 ]

  return (
    <>
      <header className={`header ${isHeaderShown ? 'show' : ''}`}>
        <div className="container relative">
          <div className="header_navbar">
            <Link to="/" className="logo">
              <img src="/images/company_lovo.webp" alt="company logo rehla" />
            </Link>
            <ul className="header_menu">
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/prebooking-trips">Prebooking Trips</Link></li>
              <li><Link to="/tourism-tours">Tourism Tours</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/about-us">AboutUs</Link></li>
              <li><Link to="/contact-us">ContactUs</Link></li>
            </ul>
          </div>
          <div className="toggle_grid">
            <ul ref={wrapperRef} className="login_box relative">
              {userData?.userDetails?<li><Link to="#" className="login" onClick={()=>setShowNavBar(!showNavBar)}>{userData?.userDetails?.Name}</Link></li>:<li><Link to="/login" className="login">Login</Link></li>}
              {isAuth && showNavBar && <div className='dropdown_menu'>
                {HeadNav?.map(nav=><div onClick={()=>setShowNavBar(!showNavBar)} className='nav-link-container'>
                  {nav?.icon}
                  <Link to={nav?.path} className='text-link' >{nav?.title}</Link>
                </div>)}
              </div>}
              <li>
                <a href="#" className="language">
                  عربي <img src="/images/internet.svg" alt="language icon" />
                </a>
              </li>
            </ul>
            <div className="toggle_btn">
              <svg
                className={`ham hamRotate ham7 ${isHeaderShown ? 'active' : ''}`}
                viewBox="0 0 100 100"
                width="80"
                onClick={handleToggle}
              >
                <path
                  className="line top"
                  d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
                ></path>
                <path className="line middle" d="m 70,50 h -40"></path>
                <path
                  className="line bottom"
                  d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
                ></path>
              </svg>
            </div>
          </div>
         
        </div>
      </header>
    </>
  );
}

export default Header;