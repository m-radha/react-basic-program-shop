import React, { useState } from 'react'
import Navbar from './Navbar';
import '../css/Home.css';
import Jar1 from '../Images/Jar1.jpg';
import jar2 from '../Images/jar2.jpg';
import visa from '../Images/visa.png';
import mastercard from '../Images/mastercard.png';
import payPal from '../Images/paypal.png';
import lock from '../Images/lock.png';
import '../css/Home.css';
const Home = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease1 = () => {
    setCount1(count1 + 1);
  }

  const handleDeccrease1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  }

  const handleIncrease2 = () => {
    setCount2(count2 + 1);
  }

  const handleDeccrease2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  }

  const calculateAmount1 = () => {
    return count1 * 10; // Adjust the calculation as per your requirement
  };

  const calculateAmount2 = () => {
    return count2 * 20; // Adjust the calculation as per your requirement
  };

  return (
    <div className='shop-container'>
      <Navbar c1={count1} c2={count2} />
      <div class="container" style={{ marginLeft: 150 }}>
        <div className="box-div"><img src={Jar1} alt='img' className='jar-img'></img></div>
        <div className="box-div" style={{width:420}}>
          <p style={{marginTop:25}}><b>Sandstone Jar</b></p>
          <p>Robust jar mad by sandstone.available in 4 colors</p>
          <p>Finish</p>
          <select>
            {/* <option value="">select color...</option> */}
            <option value="option 1">sandstone</option>
            <option value="option 2">pink</option>
            <option value="option 3">red</option>
          </select>
        </div>
        <div className="box-div">
          <p style={{marginTop:90}}>quantity</p>
          <button onClick={handleIncrease1}>+</button>
          {count1}
          <button onClick={handleDeccrease1}>-</button>
        </div>
        <div className="box-div">
          <i className='trash alternate outline icon' style={{ color: "red", cursor: 'pointer',marginLeft:100 }}></i>
          <p style={{marginLeft:100, marginTop:100}}><b>{calculateAmount1()}$</b></p>
        </div>
      </div>

      <div class="container" style={{ marginLeft: 150 }}>
        <div className="box-div"><img src={jar2} alt='img' className='jar-img'></img></div>
        <div className="box-div" style={{width:420}}>
          <p style={{marginTop:25}}><b>Eiffle chair</b></p>
          <p>Light, but white plastic chair is comfortable with wooden legs</p>
          <p>color</p>
          <select>
            {/* <option value="">select color...</option> */}
            <option value="option 1">white</option>
            <option value="option 2">pink</option>
            <option value="option 3">red</option>
          </select>
        </div>
        <div className="box-div">
          <p style={{marginTop:90}}>quantity</p>
          <button onClick={handleIncrease2}>+</button>
          {count2}
          <button onClick={handleDeccrease2}>-</button>
        </div>
        <div className="box-div">
          <i className='trash alternate outline icon' style={{ color: "red", cursor: 'pointer', marginLeft:100 }}></i>
          <p style={{marginLeft:100, marginTop:100}}><b>{calculateAmount2()}$</b></p>
        </div>
      </div>

      <div style={{ display: 'flex', marginLeft: 250, marginTop: 20 }}>
        <button style={{ marginRight: 500 }}><b>promo code?</b></button>
        <p style={{marginLeft:300}}>Subtotal:<b>{calculateAmount1() + calculateAmount2()}$</b></p>
      </div>
      <div className='checkout'>
        <p>shipping,taxs,discount calculated in checkout</p>
        <button style={{ width: 275, padding:'10px 10px', background:'blue', color:'white', borderRadius:5 }}><b>checkout</b></button>
      </div>
      <div className='checkout'>
        <img src={lock} alt='sign-in' style={{ height: 20 }}></img>
        <span>secured by snipcart</span>
      </div>
      <div className='checkout'>
        <img src={visa} alt='visa' style={{ height: 50, marginRight: 20 }}></img>
        <img src={mastercard} alt='mastercard' style={{ height: 50, marginRight: 20 }}></img>
        <img src={payPal} alt='paypal' style={{ height: 20 }}></img>
      </div>

    </div>
  )
}

export default Home
