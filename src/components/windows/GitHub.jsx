import React from 'react'
import githubdata from'../../assets/github.json' 
import MacWindows from './MacWindows'
import './github.scss'

const GitCard=({data={id:1,img:'',title:' ',description:'',tags:[],repoLink:'',demoLink:''}})=>{
    return <div className="card">
        <img src={data.img} alt="" srcSet="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag=> <p className='tag'>{tag}</p>)

            }
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            <a href={data.demoLink}>DemoLink</a>
        </div>
    </div>
}

const GitHub = ({ windowName, setWindowState }) => {
  return (
    <MacWindows windowName={windowName}  setWindowState={setWindowState} >
        <div className="cards">
            {githubdata.map(project =>{
                return <GitCard data={project} />
            })}
        </div>
    </MacWindows>
  )
}

export default GitHub