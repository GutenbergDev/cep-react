import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  margin-top: 20px;
`;

function Input({ number }) {



  return (
    <Div>
      <Div2>
      <span>Logradouro: {number.logradouro}</span>
      <span>Bairro: {number.bairro}</span>
      <span>Localidade: {number.localidade}</span>
      <span>UF: {number.uf}</span>
  <span>CEP: {number.cep}</span>
      </Div2>
    </Div>
  )
}

export default Input;
