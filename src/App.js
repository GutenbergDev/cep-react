import React from "react";
import styled from "styled-components";
import Input from "./Input";
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
`;

const Cep = styled.input`
  width: 80%;
  height: 30px;
  background-color: #ccc;
  font-size: 1.2rem;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px;
`;

const Button = styled.button`
  position: absolute;
  top: 3px;
  right: 65px;
  height: 24px;
  padding: 0 10px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const Div3 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  margin-top: 20px;
`;

function App() {

  const [number, setNumber] = React.useState('');

  async function handleClick(e) {
    let NumeroDoCep = number;

    const response = await fetch(`https://viacep.com.br/ws/${NumeroDoCep}/json/`);
    const json = await response.json();
    setNumber(json)
  }

  return (
    <Div>
      <Div2>
        <Div3>
          <Cep
            value={number}
            type="number"
            onChange={(e)=> setNumber(e.target.value)} 
            required
          />
          <Button onClick={handleClick}>Buscar</Button>
        </Div3>

        <Input number={number} />
      </Div2>
    </Div>
  );
}

export default App;
