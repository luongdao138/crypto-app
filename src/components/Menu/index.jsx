import React, { useEffect, useState } from 'react';
import MenuWrapper from './Menu.styles';
import logo from '../../assets/logo.png';
import links from './links';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Menu = () => {
  const navigate = useNavigate();
  const { Logo, Nav, SmallMenu } = MenuWrapper;
  const [openMenu, setOpenMenu] = useState(false);

  const handleNavigate = (path) => {
    setOpenMenu(false);
    navigate(path);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 800) {
        setOpenMenu(false);
      }
    });
  }, []);

  return (
    <MenuWrapper>
      <Logo to='/'>
        <img src={logo} alt='' />
        <h2>Cryptoverse</h2>
      </Logo>
      <Nav open={openMenu}>
        {links.map((link) => {
          return (
            <Nav.Item key={link.id}>
              <NavLink
                to={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.path);
                }}
                className={(navData) => (navData.isActive ? 'active' : '')}
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </Nav.Item>
          );
        })}
      </Nav>
      <SmallMenu>
        <button onClick={() => setOpenMenu((prev) => !prev)}>
          {openMenu ? <MdClose /> : <MdMenu />}
        </button>
      </SmallMenu>
    </MenuWrapper>
  );
};

export default Menu;
