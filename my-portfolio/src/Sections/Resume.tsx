import React, { useState } from 'react';
 
function Resume () {
    const [resume, setResume] = useState(true)
    const onDownload = () => {
        const pdfUrl = "Sydeny Andre Resume";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = ''; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section id='Resume' >
        <div className='row justify-content start'style={{marginRight:'2rem'}}>
            <div className='col'></div>
            <div className='col-8' style={{ width: "100vw" }}>
                <div className='sect-header row'>
                    <div className='col'></div>
                    <div className='col'> 
                        My Experience
                    </div>
                </div>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <div >
                            <a href={resume ? '/Sydney_Andre_Resume1.pdf' : 'Sydney_Andre_Resume2.pdf'} target="_blank" rel="noreferrer">

                        <img src={resume ? '/resume_sa.png' : '/resume_pretty.png'} className='resume'/>
                            </a>
                      

                        </div>
                    </div>
                </div>
                <div className='row'>
                                <div className='col'></div>
                                <div className='col' style={{marginTop:'.5rem'}}>

                                <a className='col custom-button' 
                        style={{marginRight:'2.5rem', textDecoration:'none', }}
                        href='Sydney_Andre_Resume2.pdf' target="_blank" rel="noreferrer"
                        >Get a Copy</a>
                                </div>
                            </div>
            </div>
        </div>
    </section>
    )
}
export default Resume;
