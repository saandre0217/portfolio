import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/navBar/Navbar';
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
          
            <Router>
            <NavigationBar />
              <Routes> 
                {/* <Route path='/' element={<About />}></Route> */}
              </Routes>
            </Router>
          
    </div>
  );
}

 export default App;
// <div className="scroll-body" data-bs-spy="scroll" data-bs-target="#navbar-example"  >
// <a id="about">
//   <About />
// </a>
// <a id="projects">
//   <Projects />
// </a>
// <a id="resume">
//   <Resume />
// </a>
// </div>