import React, { useState } from 'react';
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';
import logoo from '../Assets/images/logoo.png';
import { IoBagOutline, IoMenu } from 'react-icons/io5';
import { FaXmark } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* PC Navigation */}
      <div className='pc-nav'>
        <nav className='navbar'>
          <div className='logo'>
            <Link to='/'>
              <img src={logoo} alt='Logo' />
              <p>VIORA</p>
            </Link>
          </div>
          <ul className='nav-list'>
            <li><NavLink  to='/'  className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to='/women'  className={({ isActive }) => isActive ? 'active' : ''}>Women</NavLink></li>
            <li><NavLink to='/men'  className={({ isActive }) => isActive ? 'active' : ''}>Men</NavLink></li>
            <li><NavLink to='/kids'  className={({ isActive }) => isActive ? 'active' : ''}>Kids</NavLink></li>
          </ul>
          <div className='nav-actions'>
            <Link to='/search'>
              <div className='search'>
                <p>Search</p> 
                <CiSearch className='search-icon' />
              </div>
            </Link>
            <Link to='/cart'>
              <IoBagOutline className='cart-icon' />
            </Link>
          </div>
        </nav>
      </div>

      {/* Tab/Mobile Navigation */}
      <div className='tab-nav'>
        <div className='logo'>
          <Link to='/'>
            <img src={logoo} alt='Logo' />
            <p>VIORA</p>
          </Link>
        </div>
        <Link to='/search'>
              <div className='search-tab'>
                <p>Search</p> 
                <CiSearch className='search-icon' />
              </div>
            </Link>
        <IoMenu className={!isMenuOpen ? 'menu-icon' : 'hide'} onClick={handleMenuToggle} />
        <div className={isMenuOpen ? 'menu open' : 'menu'}>
          <FaXmark className={isMenuOpen ? 'close-icon' : 'hide'} onClick={handleMenuToggle} />
          <ul>
            <li><NavLink onClick={handleMenuToggle}  to='/'  className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink onClick={handleMenuToggle} to='/women'  className={({ isActive }) => isActive ? 'active' : ''}>Women</NavLink></li>
            <li><NavLink onClick={handleMenuToggle} to='/men'  className={({ isActive }) => isActive ? 'active' : ''}>Men</NavLink></li>
            <li><NavLink onClick={handleMenuToggle} to='/kids'  className={({ isActive }) => isActive ? 'active' : ''}>Kids</NavLink></li>
            <li><NavLink onClick={handleMenuToggle} to='/cart'  className={({ isActive }) => isActive ? 'active' : ''}>
              <div className='cart-tab'> 
                 Cart<IoBagOutline className='cart-icon' />
              </div> 
            </NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;