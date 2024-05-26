import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Background />
      <div className="absolute w-full h-screen flex justify-center items-center">
        <Container>
          <></>
        </Container>
      </div>
    </div>
  );
}

{
  /* <div className="w-[250px]">
            <p>Hello World</p>
          </div> */
}

export default App;
