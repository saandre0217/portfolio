import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { projectData } from './project-data';
import comment from '../images/WHSPR/comment.png'
function Projects() {
    const [project, setProject ] = useState(projectData[0])


    return (
        <section id='projects' className='justify-content start'>
            <div className='row justify-content start'>
                <div className='col'></div>
                <div className='col-8' style={{width: "100vw"}}>
                    <div className='sect-header row'>
                        <div className='col'></div>
                        <div className='col'> Look What I Made!</div>
                        
                    </div>
                    <div className="row">
                        <div className='col'></div>
                        <div className='col'>
                            <div className='row'>
                                <button className='col' id={project[0].projectName === 'WHSPR' ? 'active' : ''}
                                    onClick={() => setProject(projectData[0])}
                                >WHSPR</button>
                                <button className='col' id={project[0].projectName === 'dogagatchi' ? 'active' : ''}
                                     onClick={() => setProject(projectData[1])}
                                >Dogagatchi</button>
                                <button className='col' id={project[0].projectName === 'ttt' ? 'active' : ''}
                                     onClick={() => setProject(projectData[2])}
                                >Tic Tac Toe</button>
                            </div>
                            <div >{project[0].projectDesc}</div>
                            <Carousel>
                            {project.map((data, i) => (
                               <Carousel.Item key={i} interval={5000}>
                                   
                                   <img src={data.imageSrc} style={{width:'50vw', height:'auto'}}/>
                                   <div>{data.caption}</div>
                               </Carousel.Item>
                            ))}
                            </Carousel> 
                            <div className='row'>
                                <div className='col'>

                            <a href={project[0].web} target="_blank" rel="noreferrer">Visit</a>
                                </div>
                                <div className='col'>

                            <a>Learn More</a>
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