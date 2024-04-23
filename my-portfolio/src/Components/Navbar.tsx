import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavigationBar (){
    return(
        <div>
            <Nav variant="underline">
                <Nav.Item>
                    <Nav.Link href="/home">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Resume</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Let's Chat" id="nav-dropdown">
                    <NavDropdown.Item  href="mailto:sydneyandre.dev@gmail.com" target="_blank" rel="noreferrer">Email With Me</NavDropdown.Item>
                    <NavDropdown.Item  href="http://linkedin.com/in/sydney-andre" target="_blank" rel="noreferrer">Link With Me</NavDropdown.Item>
                    <NavDropdown.Item href="http://github.com/saandre0217" target="_blank" rel="noreferrer">Git with Me</NavDropdown.Item>
                </NavDropdown>
            </Nav>            
        </div>
    )
}
export default NavigationBar