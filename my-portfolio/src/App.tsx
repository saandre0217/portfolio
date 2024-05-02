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
        <div className="main-title " style={{marginTop:"1rem", marginBottom:'.5rem'}}>Sydney Andre</div>
        <Contact />
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
