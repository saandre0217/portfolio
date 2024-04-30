import React from "react";
import linkedIn from "../icons/linkedin.svg"
import email from "../icons/email.svg"
import github from "../icons/github-mark.svg"
export const Contact = () => {
    return(
        <div className="custom-row">
            <a href="mailto:sydneyandre.dev@gmail.com" target="_blank" rel="noreferrer">
            <img src={email}/>
            </a>
            <a href="http://linkedin.com/in/sydney-andre" target="_blank" rel="noreferrer">
                <img src={linkedIn}/>
            </a>  
            <a href="http://github.com/saandre0217" target="_blank" rel="noreferrer">
                <img src={github}/>
            </a>
           
            
        </div>
    )
}