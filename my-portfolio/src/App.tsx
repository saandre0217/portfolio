import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/navBar/Navbar';
import { Home } from './Pages/Home';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="App ">
      <header className="App-header sticky1 shadow ">
        <div className="title " style={{marginTop:"1rem", marginBottom:'.5rem'}}>Sydney Andre</div>
        <Contact />
      </header>
      <header className="App-header sticky2 shadow " style={{top:'50'}}>
        <div className='title'>Vision</div>
      </header>
      <header className="App-header sticky3 shadow " style={{top:'50'}}>
        <div className='title'>Skills</div>
      </header>
            <Router >
            <NavigationBar />
              <Routes> 
                <Route path='/' element={<Home />}></Route>
              </Routes>
            </Router>


    </div>
  );
}

 export default App;
