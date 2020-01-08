import React from 'react';
import './App.css';
import Section from './components/Section';
import logo from './logo.svg';

const handleClick  = () => {
  alert("clicked");
};

const App: React.FC = () => {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Section 
        title="What is Lorem Ipsum?" 
        titleColor="#123456"
        action={handleClick}
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry</Section>
  );
};

export default App;
