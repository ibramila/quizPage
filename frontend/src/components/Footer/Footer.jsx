import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className='footer'>
          <ul>
            <li className='footer_about'>
              <h6>ABOUT THE HEXA TEMPLATE</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
              <ul>
                <li><BsTwitter /></li>
                <li><BsFacebook /></li>
                <li><BsInstagram /></li>
                <li><BsLinkedin /></li>
              </ul>
            </li>
            <li className='footer_contact'>
              <ul>
                <li>CONTACT INFO</li>
                <li>Address:
                  <ul>
                    <li>34 Street Name, City Name Here, United States</li>
                  </ul>
                </li>
                <li>Telephone:
                  <ul>
                    <li>+1 242 4942 290</li>
                  </ul>
                </li>
                <li>Email:
                  <ul>
                    <li>info@yourdomain.com</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='footer_links'>QUICK LINKS
              <ul>
                <li>About </li>
                <li>Terms of Use</li>
                <li>Disclaimers</li>
                <li>Contact</li>
              </ul>
            </li>
          </ul>
          <div className="copyright">
            Copyright © 2023 All rights reserved | This template is made with  by <Link>Colorlib</Link>
          </div>
        </div>
      </div >
    </footer >
  )
}

export default Footer