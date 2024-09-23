import React from 'react'
import '../styles/navbar.css'
import searchicon from '../assets/search.svg'
import useraccount from '../assets/useraccount.svg'
import cart from '../assets/cart.svg'
const Navbar = () => {
  
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-container');
    if (window.scrollY > 50) { 
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  return (
    <div className='navbar-container'>
<div className="left-nav">
<p className='logo-title'>HomeFurnish.</p>
</div>
<div className="middle-nav">
<p>Home</p>
<p>Shop</p>
<p>About</p>
<p>Contact</p>
</div>
<div className="right-nav">
<img src={searchicon} alt="" />
<img src={cart} alt="" />
<img src={useraccount} alt="" />
</div>
    </div>
  )
}

export default Navbar