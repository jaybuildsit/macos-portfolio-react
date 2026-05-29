import React,{useEffect,useState} from 'react'
import Markdown from 'react-markdown'
import MacWindows from './MacWindows'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './note.scss'
const Note = ({ windowName, setWindowState }) => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(()=>{
        fetch('/notes.txt')
        .then(response => response.text())
        .then(text => setMarkdown(text))
    },[])
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState} >
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language='javascript' style={nightOwl}>
                {markdown}
            </SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindows>
  )
}

export default Note