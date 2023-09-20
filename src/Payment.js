import React, { useState } from 'react'
import { useCartContext } from './context/CartContext'
import FormatPrice from './Helpers/FormatPrice';
import styled from 'styled-components';
import { Button } from './styles/Button';
import {BsFillPatchCheckFill} from 'react-icons/bs';
const Payment = () => {
  const {total_amount,shipping_fee}=useCartContext();
  const [order,setOrder]=useState(false);
  const handleSubmit=(event)=>{
    event.preventDefault();
    setOrder(!order);
  }
 
  return (
   <Wrapper className="container">
     { order===true ?
    
     <div className='orderplaced'>
        <h2>Order Placed. Successful!</h2>
        <div ><BsFillPatchCheckFill className='icon-tic'/></div>
      </div>

  
:( <div><h2>Total Amount :<FormatPrice price={total_amount+shipping_fee}/></h2>
   <div className='form-section'>
    <form action="post" className='form-value' onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type="text"required placeholder='Full Name'/>
      <label htmlFor='cardNumber'>Card Number</label>
      <input type='number' required pattern="[0,9]{10}" placeholder ="52341234506"/>
      <label htmlFor='cvv' >CVV</label>
      <input type='number' required/>
      <label htmlFor='expireydate' >Expiry Date</label>
      <input type='date' required />
       <label htmlFor='cvv'  >Pin Code</label>
       <input type='password' placeholder='***' pattern="[0,9]{3}" required />
      <Button>Pay Now</Button>
    </form>
   </div></div>)}
   </Wrapper>
  )
}
const Wrapper = styled.section `
padding:4rem;
 .form-section{
  padding:10px;
  
 }
 .form-value{
  padding-top:15px;
  gap:20px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
 }
 input {
  width:100%;
 }
 .form-value{
  display:flex;
  flex-direction:column;
 }
 .form-value .form-option{
  padding-top:15px;
  display:flex;
  gap:20px;
  align-items:center;
  justify-content:space-between;
 }
 label {
  font-size:15px;
 }
 Button{
  background-color:green;
 }
 .orderplaced{
  
  position:relative;
  top:20vh;
  text-align:center;
  height:60vh;
  
 }
 .orderplaced h2{
  font-weight:400;
  padding-bottom:20px;
  font-family:sans-sherif;
 }
 .icon-tic{
  color:green;
  font-size:50px;
 }
`
export default Payment;

