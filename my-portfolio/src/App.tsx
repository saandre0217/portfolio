import React from 'react';
import './App.css';
import NavigationBar from './Components/Navbar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">sydney andre</div>
        <div>lifelong learner | software developer | silly goose</div>
      </header>
            <NavigationBar />
            <div id="about">
              <About />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="resume">
              <Resume />
            </div>
    </div>
  );
}

export default App;
