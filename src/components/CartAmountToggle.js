import React from 'react'
import { styled } from 'styled-components'

const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <Wrapper>
    <div className='cart-button'>
  <div className="amount-toggle">
    <button className='buttonCart' onClick={()=>setDecrease()}>-</button>
    <div className="amount-style">{amount}</div>
    <button className='buttonCart' onClick={()=>setIncrease()}>+</button>
  </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.buttonCart{
    font-size:25px;
    font-weight:400;
}
`;
export default CartAmountToggle