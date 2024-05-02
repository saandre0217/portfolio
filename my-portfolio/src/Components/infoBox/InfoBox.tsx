import React from "react";

export type InfoObjModel = {
    type: string
    header: string,
    classDesc: string,
    body: string,
}

export interface InfoObjProps {
    infoObjData: InfoObjModel;
}

export const InfoBox = (infoObj: InfoObjProps) => {
    const obj = infoObj.infoObjData
    return (
        <div className="App">
            <header className={obj.classDesc} style={{ top: '50' }}>
                <div className='sub-title'>{obj.header}</div>
                <div className="sect-body">{obj.body}</div>
            </header>
        </div>
    )
}
/**
 *  <header className="App-header sticky2 shadow " style={{top:'50'}}>
        <div className='sub-title'>Vision</div>
      </header>
      <header className="App-header sticky3 shadow " style={{top:'50'}}>
        <div className='sub-title'>Skills</div>
      </header>
 */