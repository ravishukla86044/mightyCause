import logo from './Logo.jpg';
import Search from './Search';
import React from 'react';
import Footer from './Footer';
import './Login.css';
import Form from './Form';
import {
  AccountCircle,
  ExploreOutlined,
  SearchOutlined,
} from '@material-ui/icons';

const Login = () => {
  let iconStyles = { color: 'rgb(97, 136, 253)' };
  return (
    <div>
      <div className='navbar'>
        <div className='left-link'>
          <button>
            <ExploreOutlined style={iconStyles} color='primary' />
          </button>
        </div>
        <div className='logo'>
          <img src={logo} alt='' />
          <h3 className='name'>mightycause</h3>
        </div>
        <div className='right-link'>
          <button>
            <Search style={iconStyles} color='primary'></Search>
          </button>
          <button>
            <AccountCircle style={iconStyles} color='primary' />
          </button>
        </div>
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
