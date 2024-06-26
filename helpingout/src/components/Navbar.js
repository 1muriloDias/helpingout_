import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos CSS inseridos diretamente no arquivo JS usando styled-components
const NavbarContainer = styled.nav`
  background: linear-gradient(90deg, #0FAA75 0%, #00693C 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
`;

const NavbarLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const NavbarIcon = styled.i`
  margin-left: 0.5rem;
  font-size: 1.8rem;
`;

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;
  @media screen and (max-width: 960px) {
    display: ${({ click }) => (click ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    background: #242222;
    z-index: 1;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      background-color: #fff;
      color: #242424;
      border-radius: 0;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogo to='/' onClick={closeMobileMenu}>
          <img
            src='/images/FF.png'
            alt='Imagem perfil'
            style={{ width: '190px', height: 'auto', position: 'absolute', top: '20px', left: '20px' }}
          />
          <img
            src='/images/Perfil.png'
            alt='Imagem perfil'
            style={{ width: '60px', height: 'auto', position: 'absolute', top: '9px', right: '35px' }}
          />
          <NavbarIcon className='fab fa-typo3' />
        </NavbarLogo>
        <MenuIcon onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </MenuIcon>
        <NavMenu click={click}>
        </NavMenu>
        {button && <Button buttonStyle='btn--outline'>Perfil</Button>}
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
