import React from 'react';
import { Link } from 'react-router-dom';
import FooterWrapper from './Footer.styles';
import links from '../Menu/links';
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterWrapper.Title>
        Copyright © 2021
        <Link to='/'>Cryptoverse Inc.</Link>
        <br />
        All Rights Reserved.
      </FooterWrapper.Title>
      <FooterWrapper.Menu>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </FooterWrapper.Menu>
    </FooterWrapper>
  );
};

export default Footer;
