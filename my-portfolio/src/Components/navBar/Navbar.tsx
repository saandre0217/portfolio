import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import github from '../../icons/github.svg';
import linkedin from '../../icons/linkedin.svg';
import email from '../../icons/email.svg';
import { Link } from "react-router-dom";
import { sectionIds } from './sectionId';

function NavigationBar (){
    const [activeLink, setActiveLink] = useState("about")
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)

        if(element){
            const marginTop: number = 0;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top: scrollToY, behavior:"smooth"});
        }
    }
    return(
            <Nav variant="underline" defaultActiveKey="#about" className='sticky-top accent-background navbar-example'>
                {sectionIds.map((id, i) => (
                    <Nav.Link  key={i} onClick={() => scrollToSection(id)}>
                        <Link to="/" className="active" >{id}</Link>
                    </Nav.Link>
                ))}
                <NavDropdown title="Let's Chat" id="nav-dropdown">
                    <NavDropdown.Item  href="mailto:sydneyandre.dev@gmail.com" target="_blank" rel="noreferrer" >
                        <div className="custom-row">
                            <img style={{ marginRight:'.25rem'}} src={email}/>
                            <div>
                                Email With Me
                            </div>
                        </div>      
                    </NavDropdown.Item>
                    <NavDropdown.Item href="http://linkedin.com/in/sydney-andre" target="_blank" rel="noreferrer" >
                    <div className="custom-row">
                    <img style={{ marginRight:'.25rem'}} src={linkedin}/>
                    <div>
                        Link With Me
                    </div>
                    </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item  href="http://github.com/saandre0217" target="_blank" rel="noreferrer" >
                    <div className="custom-row">
                    <img style={{ marginRight:'.25rem'}} src={github}/>
                    <div>
                        Git With Me
                    </div>
                    </div>
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>            
      
    )
}
export default NavigationBar