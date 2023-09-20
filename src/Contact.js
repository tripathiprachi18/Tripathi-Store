import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { styled } from 'styled-components';
const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Wrapper>
    <h2 className='common-heading'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4552165854257!2d77.33870587542367!3d28.58611747569011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a8f672a5d1%3A0xe1a1fcdef9f5cf85!2sModi%20Mall!5e0!3m2!1sen!2sin!4v1693218540784!5m2!1sen!2sin" 
      width="100%" height="350"
       style={{border:0}} 
       allowfullscreen="" 
       loading="lazy" 
       title='map'
       referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form method='POST' action='https://formspree.io/f/xaygozdo' className='contact-inputs'>
          <input type='text' placeholder='username'
          name ="Username" 
          required
          autoComplete='off'
          value={isAuthenticated ? user.name:""}
          />
          <input type='email'
          placeholder='Enter email'
          name='Email'
          autoComplete='off'
           required
           value={isAuthenticated? user.email:""}
           
          />
          <textarea name='Meassage' required 
           placeholder='Write your message'
           autoComplete='off'
           cols='30'
           rows="10"
          />
          <input type='submit'/>
        </form>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 5rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 5rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;
export default Contact