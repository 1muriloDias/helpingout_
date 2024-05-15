import React from 'react';
import styled from 'styled-components';

// Estilos CSS inseridos diretamente no arquivo JS usando styled-components
const HeroContainer = styled.div`
  background: url('/images/Test.jpeg') center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: -100px;
`;

const HeroDescription = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Certifique-se de corrigir a referência ao arquivo de imagem abaixo */}
      {/*<img src='/images/Test.jpeg' alt='Imagem foda' />*/}
      {/* Adicione o fechamento da tag img e corrija a referência ao arquivo de imagem */}

     
    </HeroContainer>
  );
}

export default HeroSection;
