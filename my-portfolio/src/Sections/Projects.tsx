import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { projectData } from './project-data';
import comment from '../images/WHSPR/comment.png'
function Projects() {
    const [project, setProject ] = useState(projectData[0])


    return (
        <section id='Projects' >
            <div className='row justify-content start' style={{marginRight:'2rem'}}>
                <div className='col'></div>
                <div className='col-8' style={{width: "100vw"}}>
                    <div className='sect-header row'>
                        <div className='col'></div>
                        <div className='col' style={{marginTop:'2.5rem'}}> Look What I Made!</div>
                        
                    </div>
                    <div className="row ">
                        <div className='col'></div>
                        <div className='col '>
                            <div className='row' style={{margin:'.5rem'}}>
                                <button className='col custom-button' id={project[0].projectName === 'WHSPR' ? 'active' : ''}
                                    onClick={() => setProject(projectData[0])}
                                    
                                >WHSPR</button>
                                
                                <button className='col custom-button' id={project[0].projectName === 'dogagatchi' ? 'active' : ''}
                                     onClick={() => setProject(projectData[1])}
                                >Dogagatchi</button>
                                <button className='col custom-button' id={project[0].projectName === 'ttt' ? 'active' : ''}
                                     onClick={() => setProject(projectData[2])}
                                >Tic Tac Toe</button>
                            </div>
                            <div className='divider'>

                            <div style={{margin:'.5rem', fontFamily:'subheader-font', fontWeight:'700', color:'#F1EDE6'}}>{project[0].projectDesc}</div>
                            <Carousel>
                            {project.map((data, i) => (
                                <Carousel.Item key={i} interval={5000}>
                                   
                                   <img src={data.imageSrc} style={{width:'50vw', height:'auto'}}/>
                                   <div style={{margin:'1rem .5rem', fontFamily:'body-font', fontWeight:'700', color:'#F1EDE6'}}>{data.caption}</div>
                               </Carousel.Item>
                            ))}
                            </Carousel> 
                            <div className='row'>
                                <div className='col'>

                            <a href={project[0].web} target="_blank" rel="noreferrer" className='custom-button unactive'>Visit</a>
                                </div>
                                <div className='col'>

                            <a className='custom-button unactive'>Learn More</a>
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