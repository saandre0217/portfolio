import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { sectionIds } from './sectionId';

function NavigationBar (){
    const [activeLink, setActiveLink] = useState(sectionIds[0])
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)

        if(element){
            const marginTop: number = 0;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top: scrollToY, behavior:"smooth"});
        }
    }

    const determinActiveSection = () => {
        for(let i = sectionIds.length - 1; i >=0; i--){
            const section = document.getElementById(sectionIds[i]);

            if(section){
                const rect = section.getBoundingClientRect();
                if(rect.top <= 120 && rect.bottom >= 120){
                    setActiveLink(sectionIds[i]);
                    break;
                }
            }
        }
    }

    const handleScroll = () => {
        if(window.scrollY > 300) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        
        determinActiveSection();
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return(
            <Nav className='sticky-top  navbar-example justify-content-end' style={{width:'100vw', marginRight:'1.5rem', }}>
                {sectionIds.map((id, i) => (
                    <Nav.Link  key={i} onClick={() => scrollToSection(id)}>
                        <Link to="/" className={activeLink === id ? "active" : "unactive"} style={{marginRight:'1.5rem'}} >{id}</Link>
                    </Nav.Link>
                ))}
            </Nav>            
      
    )
}
export default NavigationBar