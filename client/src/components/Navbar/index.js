import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
	return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <div className='navbar-header'>
              <button
                type='button'
                className='navbar-toggle collapsed'
                data-toggle='collapse'
                data-target='#bs-example-navbar-collapse-1'
              >
                {' '}
                <span className='sr-only'>Toggle navigation</span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
              </button>
              <a className='navbar-brand page-scroll' href='/'>
                UniXplore
              </a>{' '}
            </div>
    
            <div
              className='collapse navbar-collapse'
              id='bs-example-navbar-collapse-1'
            >
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <a href='/' className='page-scroll'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/add' className='page-scroll'>
                    Add to Map
                  </a>
                  </li>
                {/* <li>
                  <a href='#contact' className='page-scroll'>
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      )
};

export default Navbar;