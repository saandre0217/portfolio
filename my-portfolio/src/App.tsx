import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/navBar/Navbar';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">sydney andre</div>
      </header>
          
            <Router>
            <NavigationBar />
              <Routes> 
                <Route path='/' element={<Home />}></Route>
              </Routes>
            </Router>
          
    </div>
  );
}

 export default App;
