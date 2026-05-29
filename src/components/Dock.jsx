import React from 'react'
import "./dock.scss"

const Dock = ({ windowstate, setWindowstate }) => {
  return (
    <footer className='dock'>
        <div onClick={() => setWindowstate({...windowstate, github:true})}
        className="icon github"><img src="/doc-icons/github.svg" alt="" srcSet="" /></div>
        <div onClick={() => setWindowstate({...windowstate, note:true})}
        className="icon note"><img src="/doc-icons/note.svg" alt="" srcSet="" /></div>
        <div onClick={() => setWindowstate({...windowstate, resume:true})}
        className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" srcSet="" /></div>
        <div onClick={()=>{window.open('https://calendar.google.com/','_blank')}}
        className="icon calender"><img src="/doc-icons/calender.svg" alt="" srcSet="" /></div>
        <div onClick={()=>{window.open('mailto:jayaprakash.narayan@example.com','_blank')}}
        className="icon mail"><img src="/doc-icons/mail.svg" alt="" srcSet="" /></div>
        <div onClick={() => setWindowstate({...windowstate, spotify:true})}
        className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" srcSet="" /></div>
        <div onClick={()=>{window.open('https://www.linkedin.com/in/jayaprakash-narayan-388174285/','_blank')}}
        className="icon link"><img src="/doc-icons/link.svg" alt="" srcSet="" /></div>
        <div onClick={() => setWindowstate({...windowstate, cli:true})}
        className="icon cli"><img src="/doc-icons/cli.svg" alt="" srcSet="" /></div>
    </footer>
  )
}

export default Dock