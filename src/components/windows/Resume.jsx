import React from 'react'
import MacWindows from './MacWindows'
import './resume.scss'

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState} >
        <div className="resume-window">
            <embed src='/Resume-Sample-1-Software-Engineer.pdf' frameBorder="0"></embed>
        </div>
    </MacWindows>
  )
}

export default Resume