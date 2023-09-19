import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shopping = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Shopping page</h1>
      <button onClick={()=>navigate('/')}>back</button>
    </div>
  )
}

export default Shopping
