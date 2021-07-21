import { Email, Facebook } from '@material-ui/icons';
import React from 'react';
import './Form.css';

const Form = () => {
  let iconStyles = { color: 'rgb(54, 52, 52)', position: 'absolute' };
  return (
    <div>
      <div className='form'>
        <h1 className='heading'>Log in or sign up</h1>
        <div>
          <button className='google btn'>
            <span>G</span> Use Google
          </button>
        </div>
        <div>
          <button className='fb btn'>
            <span>
              <Facebook />
            </span>
            Use Facebook
          </button>
        </div>
        <div className='befaft'>
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className='myform'>
          <Email style={iconStyles} />
          <input type='email' name='' id='input' placeholder='Email' />
          <div>
            <input type='submit' value='Continue' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
