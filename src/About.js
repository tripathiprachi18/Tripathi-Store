import React, { useContext } from 'react'
import { AppContext } from './context/ProductsContext';
import HeroSection from './components/HeroSection'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';
const About = () => {
  const myName=useContext(AppContext);
  const data ={
    name:"Tripathi Store",
  }
  return (
    <Wrapper className='container'>
      <h2>Our Story</h2>
      <p>It has been an amazing journey working with <span>Tripathi Store</span> so far. In Tripathi Store finding your desired product with the help of a filter section and searching and placing the order has become easier. 
      Kindly visit the website and do not forget to buy your favourite product. Thank You!! </p>
      <NavLink to="/products"><Button>Shop Now</Button></NavLink>
    
    </Wrapper>
   
  )
}
const Wrapper=styled.section`
padding:7rem 9rem;
height:70vh;
text-align:center;
span{
  font-size:25px;
  color:orange;
}
h2{
  padding-bottom:3rem;
  font-weight:600;
}
p{
  font-size:18px;
  line-height:3rem;
}
Button{
  margin-top:20px;
}
`;
export default About