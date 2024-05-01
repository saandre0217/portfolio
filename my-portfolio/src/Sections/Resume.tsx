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
        <section id='resume' className='justify-content start'>
        <div className='row justify-content start'>
            <div className='col'>
            </div>
            <div className='col-8' style={{ width: "100vw" }}>
                <div className='sect-header row'>
                    <div className='col'></div>
                    <div className='col'> 
                    <div className='row'>
                        <div className='col-8'>The Last Seven Years...</div>
                        <button className='col'
                        onClick={() => setResume(() => !resume)}
                        >{resume ? 'spice it up' : 'back to basic'}</button>

                    </div>
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
            </div>
        </div>
    </section>
    )
}
export default Resume;