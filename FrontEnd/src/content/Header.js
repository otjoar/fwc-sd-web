import React from 'react';
import { FaBars } from 'react-icons/fa';
import mainLogo from '../assets/fwc-sd-logo.png';

const Header = ({handleToggleSidebar}) => {
    return (
      <header>
        <h1>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
          <img className="logo" src={mainLogo} alt="FWC-SD Logo" />Fleet Weather Center San Diego
        </h1>
        <h3>Fleet Weather Center San Diego Products</h3>
      </header>
    );
}

export default Header;