import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import github from '../icons/github.svg'
import linkedin from '../icons/linkedin.svg'
import email from '../icons/email.svg'

function NavigationBar (){
    return(
        <div className='standard-marg-left'>
            <Nav variant="underline" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/home" >About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Resume</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Let's Chat" id="nav-dropdown">
                    <NavDropdown.Item  href="mailto:sydneyandre.dev@gmail.com" target="_blank" rel="noreferrer">
                        <div className="custom-row">
                            <img style={{ marginRight:'.25rem'}} src={email}/>
                            <div>
                                Email With Me
                            </div>
                        </div>      
                    </NavDropdown.Item>
                    <NavDropdown.Item href="http://linkedin.com/in/sydney-andre" target="_blank" rel="noreferrer">
                    <div className="custom-row">
                    <img style={{ marginRight:'.25rem'}} src={linkedin}/>
                    <div>
                        Link With Me
                    </div>
                    </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item  href="http://github.com/saandre0217" target="_blank" rel="noreferrer">
                    <div className="custom-row">
                    <img style={{ marginRight:'.25rem'}} src={github}/>
                    <div>
                        Git With Me
                    </div>
                    </div>
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>            
        </div>
    )
}
export default NavigationBar