import {
  FileCopySharp,
  Help,
  MonetizationOn,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from '@material-ui/icons';
import React from 'react';
import './Footer.css';
const Footer = () => {
  let iconStyles = { color: 'white', fontSize: 16 };
  return (
    <div>
      <div className='footer'>
        <div>
          <div class='products'>
            <button>Products</button>
            <ul>
              <li>
                <a href='#'>Cloud Service</a>
              </li>
              <li>
                <a href='#'>Music Streaming</a>
              </li>
              <li>
                <a href='#'>Consulting Help</a>
              </li>
            </ul>
          </div>
          <div class='products'>
            <button>Resources</button>
            <ul>
              <li>
                <a href='#'>Cloud Service</a>
              </li>
              <li>
                <a href='#'>Music Streaming</a>
              </li>
              <li>
                <a href='#'>Consulting Help</a>
              </li>
              <li>
                <a href='#'>Cloud Service</a>
              </li>
              <li>
                <a href='#'>Music Streaming</a>
              </li>
              <li>
                <a href='#'>Consulting Help</a>
              </li>
              <li>
                <a href='#'>Cloud Service</a>
              </li>
              <li>
                <a href='#'>Music Streaming</a>
              </li>
              <li>
                <a href='#'>Consulting Help</a>
              </li>
              <li>
                <a href='#'>Cloud Service</a>
              </li>
              <li>
                <a href='#'>Music Streaming</a>
              </li>
              <li>
                <a href='#'>Consulting Help</a>
              </li>
              <li>
                <a href='#'>Cloud Service</a>
              </li>
              <li>
                <a href='#'>Music Streaming</a>
              </li>
              <li>
                <a href='#'>Consulting Help</a>
              </li>
              <li>
                <a href='#'>Cloud Service</a>
              </li>
              <li>
                <a href='#'>Music Streaming</a>
              </li>
              <li>
                <a href='#'>Consulting Help</a>
              </li>
            </ul>
          </div>
          <div class='products'>
            <button>Causes</button>
            <ul>
              <li>
                <a href='#'>Cloud Service</a>
              </li>
              <li>
                <a href='#'>Music Streaming</a>
              </li>
              <li>
                <a href='#'>Consulting Help</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='two'>
          <div>
            <img
              src='https://static-prod.mightycause.com/mc-client/assets/svgs/logos/glyph-mighty-white.svg'
              alt=''
            />
            <a href=''>BLOG</a>
          </div>
          <div>
            <Help style={iconStyles} />
            <a href=''>SUPPORT</a>
          </div>
          <div>
            <MonetizationOn style={iconStyles} />
            <a href=''>PRICING</a>
          </div>
          <div>
            <FileCopySharp style={iconStyles} />
            <a href=''>TERMS & PRIVACY</a>
          </div>
        </div>
        <div className='two'>
          <div>
            <Facebook style={iconStyles} />
            <a href=''>FACEBOOK</a>
          </div>
          <div>
            <Twitter style={iconStyles} />
            <a href=''>TWITTER</a>
          </div>
          <div>
            <Instagram style={iconStyles} />
            <a href=''>INSTAGRAM</a>
          </div>
          <div>
            <YouTube style={iconStyles} />
            <a href=''>YOUTUBE</a>
          </div>
        </div>
        <div className='imgs'>
          <img
            src='https://static-prod.mightycause.com/assets/images/mightycause_icon.png'
            alt=''
          />
          <h1>mightycause</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
