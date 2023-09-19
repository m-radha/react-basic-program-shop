import React from 'react';
import { NavLink } from 'react-router-dom';
import Arrow from '../Images/arrowImg.png';
import SignIn from '../Images/SignIn.png';
import CartImg from '../Images/cartImg.png';

const Navbar = (props) => {
  return (
    <div style={{ display: 'flex', marginLeft:50, padding:'20px 20px' }}>
      <NavLink to="shopping"><img src={Arrow} alt='arrow' style={{ height: 20, color: 'blue', marginLeft:135 }}></img></NavLink>
      <span style={{marginRight:200}}>continue shopping</span>
      <span style={{ fontSize: 20, fontWeight: 'bold', marginLeft:80, alignItems:'center', marginRight:200 }}>The Shop</span>
      <img src={SignIn} alt='sign-in' style={{ height: 20, marginLeft:80 }}></img>
      <span>sign in</span>
      <img src={CartImg} alt='sign-in' style={{ height: 20, marginLeft:40 }}></img>
      <span style={{marginLeft:5}}><b>{props.c1+props.c2}</b></span>
    </div>
  )
}

export default Navbar
