import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { sectionIds } from './sectionId';
import { aboutInfoObjs as About, resumeInfoObjs as Resume, projectsInfoObjs as Projects} from '../infoBox/infoObjs';
import  {InfoBox, InfoObjModel } from '../infoBox/InfoBox';

function NavigationBar (){
    const [activeLink, setActiveLink] = useState(sectionIds[0])
    const [ isScrolled, setIsScrolled ] = useState(false);
    const [infoObj, setInfoObj] = useState(About)
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)

        if(element){
            const marginTop: number = 0;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top: scrollToY, behavior:"smooth"});
        }

        if(sectionId === 'About') {
            setInfoObj(About)
        } else if( sectionId === 'Projects'){
            setInfoObj(Projects)
        } else if(sectionId === 'Resume'){
            setInfoObj(Resume)
        }
        
    }

    const determinActiveSection = () => {
        for(let i = sectionIds.length - 1; i >=0; i--){
            const section = document.getElementById(sectionIds[i]);

            if(section){
                const rect = section.getBoundingClientRect();
                if(rect.top <= 120 && rect.bottom >= 120){
                    setActiveLink(sectionIds[i]);
                    if(sectionIds[i] === 'About') {
                        setInfoObj(About)
                    } else if( sectionIds[i] === 'Projects'){
                        setInfoObj(Projects)
                    } else if(sectionIds[i] === 'Resume'){
                        setInfoObj(Resume)
                    }
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
     
            <div className='sticky1'>

            <Nav className='navbar-example justify-content-start' style={{ marginRight:'1rem'}}>
                

                {sectionIds.map((id, i) => (
                    <Nav.Link  key={i} onClick={() => scrollToSection(id)}>
                        <Link to="/" className={activeLink === id ? "active" : "unactive"} >{id}</Link>
                    </Nav.Link>
                ))}
            </Nav>
            { infoObj.map((obj:InfoObjModel, i) => (
                <InfoBox key={i+'infobox'} infoObjData={obj} />
            ))} 
            </div>
                 
                  
       
      
    )
}
export default NavigationBar;
/**
 *    
 */