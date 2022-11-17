import React, { useState } from 'react';
import styled from "styled-components";
import { SliderComponent } from "./components";
import "./base.css";
import Automation from "./img/automation.jpeg";

function App() {

  const [value, setValue] = useState(3);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <AppContainer>
      <div>
        <img className='auto' src={Automation} alt="automation" />
      </div>
      <h1>PARAMETERS</h1>
      <Automate>
        <div className="hub">
          <h2 className='first'>{value}</h2>
          <SliderComponent value={value} handleChange={handleChange} min={0} max={9} step={1} />
          <Heading>Cylinder Weight</Heading>
        </div>
        
        <button className='button'>
          LPG Alert!
        </button>
      </Automate>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  color: #15803d;

  @media (max-width: 550px){
    flex-direction: column;
  }
`

const Automate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 550px){
    flex-direction: column;
  }
`

const Heading = styled.h2`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 550px){
    font-size: 16px;
  }
`