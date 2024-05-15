import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components'; // Importe o styled-components

const StyledButton = styled.button`
  --primary: #fff;

  .btn--outline {
    background-color: transparent;
    color: #fff;
    padding: 8px 20px;
    border: 1px solid var(--primary);
    transition: all 0.3s ease-out;
  }

  .btn--medium {
    padding: 8px 20px;
    font-size: 18px;
  }

  :hover {
    background: #fff;
    color: #242424;
    transition: 250ms;
  }
`;

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

 const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <Button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    </Link>
  );
};

export default Button;

