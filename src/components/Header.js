import React from 'react'
import {NavLink} from 'react-router-dom'
// import {FiShoppingCart} from 'react-icons/fi'
import { styled } from 'styled-components'
import Nav from './Nav'
const Header   = () => {
//   const [toggle,setToggle]=useState(false);
//   const [active,setActive]=useState(false);
  return (
//     <nav className='sm:px-16 px-6 w-full flex items-center py-3 fixed top-0 z-20'>
// <div className='w-full flex justify-between items-center max-w-8xl'>
//     <Link to='/' >
//         <img src='images/tripathi-store-logo.png' alt='storeLogo' className='w-[80px] object-contain'/>
//     </Link>
//     <ul className='list-none hidden sm:flex flex-row gap-10'>
//         <li className={`${active ? 'text-pink-400' :'text-orange-400'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(!active)}><Link>Home</Link></li>
    
//         <li><Link to='/about'>About</Link></li>
//         <li><Link to='/products'>Products</Link></li>
//         <li><Link to='/contact'>Contact</Link></li>
//         <li><Link to='/cart' className='relative '><FiShoppingCart className='text-2xl relative' /><span className='w-7 h-7 absolute bg-yellow-300 grid place-items-center rounded-full -top-5 left-6'>10</span></Link></li>
        
         
        
//     </ul>
//     <div className='sm:hidden flex flex-1 justify-end items-center'>
//      <img src={toggle ? './images/close.svg' :'./images/menu.svg'}
//       onClick={()=>setToggle(!toggle)}

//      />
//      <div 
//      className={`${!toggle ? 'hidden':'flex'}
//      p-6 py-1  bg-green-400  absolute top-20 right-0 
//      mx-4 my-1 min-w-[140px] z-10 rounded-xl
//          `}>
//      <ul className='list-none  flex justify-end flex-col gap-4'>
//         <li className='hover:text-white text-[18px] font-medium cursor-pointer'><Link>Home</Link></li>
    
//         <li><Link to='/about'>About</Link></li>
//         <li><Link to='/products'>Products</Link></li>
//         <li><Link to='/contact'>Contact</Link></li>
//         <li><Link to='/cart' className='relative '><FiShoppingCart className='text-2xl relative' /><span className='w-7 h-7 absolute bg-yellow-300 grid place-items-center rounded-full -top-5 left-6'>10</span></Link></li>
        
//     </ul>
//     </div>
//     </div>
// </div>
       
       
//     </nav>
<MainHeader>
<NavLink to="/">
  <img src="./images/logo.png" alt="my logo img" className='logo'/>
</NavLink>
<Nav />
</MainHeader>
  )
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default   Header