import React from 'react';

function About() {
    return (
        <section id='About' className='App' style={{width:'100vw'}}>
            <div className='row justify-content start ' style={{marginRight:'2rem'}}>
                <div className='col-md-8'></div>
                <div className='col-6 col-md-4' style={{ width: "100vw" }}>
                    <div className='sect-header row'>
                        <div className='col'></div>
                        <div className='col'> Nice to Meet Me</div>

                    </div>
                    <div className='row '>
                        <div className='col'></div>
                        <div className='col '>
                            <div className='sect-body' style={{fontSize:'1.25rem'}}>
                                I'm Sydney, oldest sister, podcast enthusist, and amateur seamstress.
                            </div>
                            <div className='sect-body'>
                                What I am <i>really </i> saying is I am ambitious, curious, and creative. All of my natural greatness, combined with my love of software development, technical understanding of JavaScript,
                                and six years of professional project managment and marketing experience make me a software developer you'd be lucky to have on your team. If you think so too, let's chat! 
                                If you're not convinced yet, just keep scrolling.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;