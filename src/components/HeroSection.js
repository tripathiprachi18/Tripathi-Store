import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import {Button} from '../styles/Button'
const HeroSection = () => {
  return (
    <Wrapper>
    <div className='container'>
        <div className='grid grid-two-column'>
          <div className='hero-section-data'>
            <p className='intro-data '>Welcome to</p>
            <h1>Tripathi Store</h1>
            <p id='first-tagLine'>It's time to get some amazing deals and up your style.</p>
            <p className='second-tagLine'>We’re not just a store, we’re <span style={{color:"orange", fontSize:"25px"}}>Y</span>our story.
            </p>
            <Link to='./products'>
              <Button>Shop Now</Button></Link>
          </div>
          <div className='hero-section-image'>
            <figure>
            <img src='./shopping-with-family.webp' alt='heroImage' className='img-style'/>
             </figure>
          </div>
        </div>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }
   #first-tagLine{
    margin-bottom:0;
    padding-bottom:0;
      }
      .second-tagLine{
        margin-top:-5px;
      }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;

    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
    
      background-color:#F7C749 ;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color:#F7C749;
    }
  }
`;

export default HeroSection;

