import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { projectData } from './project-data';
import { InfoBox } from '../Components/infoBox/InfoBox';
function Projects() {
    const [project, setProject ] = useState(projectData[0])
    const [isInfoBoxShow, setIsInfoBoxShow] = useState(false)
    const [ isScrolled, setIsScrolled ] = useState(false);

    const determineShowProjectsInfoBox = () => {
            const section = document.getElementById('Projects');

            if(section){
                const rect = section.getBoundingClientRect();
                if(rect.top <= 120 && rect.bottom >= 120){
                setIsInfoBoxShow(true)
                } else {
                    setIsInfoBoxShow(false)
                }
            }
    }

    const handleScroll = () => {
        if(window.scrollY > 300) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        
        determineShowProjectsInfoBox();
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <section id='Projects' >
          {project[0].infoObjs?.map((infoObj, i) => (
           isInfoBoxShow ? <InfoBox key={i+'projInfo'} infoObjData={infoObj}/> : ''
          ))}
            <div className='row justify-content start' style={{marginRight:'2rem'}}>
                <div className='col'></div>
                <div className='col-8' style={{width: "100vw"}}>
                    <div className='sect-header row'>
                        <div className='col'></div>
                        <div className='col'style={{marginRight:'2rem'}} >Web Development</div>
                        
                    </div>
                    <div className="row ">
                        <div className='col' ></div>
                        <div className='col '>
                            <div  className='row'>
                                <button className='col custom-button' id={project[0].projectName === 'WHSPR' ? 'active' : ''}
                                    onClick={() => setProject(projectData[0])}
                                    
                                >WHSPR</button>
                                
                                <button className='col custom-button' id={project[0].projectName === 'dogagatchi' ? 'active' : ''}
                                     onClick={() => setProject(projectData[1])}
                                >Dogagatchi</button>
                                {/* <button className='col custom-button' id={project[0].projectName === 'ttt' ? 'active' : ''}
                                     onClick={() => setProject(projectData[2])}
                                >Tic Tac Toe</button> */}
                            </div>
                            <div className=' col divider'>

                            {/* <div style={{margin:'.5rem', fontFamily:'subheader-font', fontWeight:'700', color:'#F1EDE6'}}>{project[0].projectDesc}</div> */}
                            <Carousel indicators={false}>
                            {project.map((data, i) => (
                                <Carousel.Item key={i} interval={5000}>
                                   
                                   <img src={data.imageSrc} className='carousel-image' />
                                   <div style={{margin:'.5rem .5rem 1rem .5rem', fontFamily:'body-font', fontWeight:'700', color:'#F1EDE6'}}>{data.caption}</div>
                               </Carousel.Item>
                            ))}
                            </Carousel> 
                            <div className='row' style={{marginBottom:'.5rem'}}>
                                <div className='col'>

                            <a href={project[0].web} target="_blank" rel="noreferrer" className='custom-button unactive' style={{textShadow:'none'}}>Visit</a>
                                </div>
                                <div className='col'>

                            <a href={project[0].github} target="_blank" rel="noreferrer" className='custom-button unactive' style={{textShadow:'none'}}>Dig In</a>
                                </div>
                            </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;
/**
 * nav bar with project types that changes to see diff carousel
 */