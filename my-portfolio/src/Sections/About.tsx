import React from 'react';

function About() {
    return (
        <section id='about' style={{width:'100vw'}}>
            <div className='row justify-content start ' style={{marginRight:'2rem'}}>
                <div className='col'></div>
                <div className='col-8' style={{ width: "100vw" }}>
                    <div className='sect-header row'>
                        <div className='col'></div>
                        <div className='col'> Nice to Meet You :)</div>

                    </div>
                    <div className='row '>
                        <div className='col'></div>
                        <div className='col '>
                            <div>
                                I'm Sydney, an oldest sister, podcast enthusist, and amateur seamstress.
                            </div>
                            <div>
                                What I'm really saying is I am driven, curious, and creative by nature. All that combined with my awesome JavaScript skills and six years of professional experience supporting educational progress in Louisiana
                                make me a software developer you'd be lucky to have on your team. If you think so too, let's chat! If you're not convinced just yet, keep scrolling ;)
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;