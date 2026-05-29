import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'
const MacWindows = ({ children, width = '40vw', height = '50vh', windowName, setWindowState }) => {
    return (
        <div>
            console.log(windowName);
            console.log(setWindowState);
            <Rnd default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}>

                {/* <img src="https://images.unsplash.com/photo-1779485070200-a33a369afe5a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={300} width={300} alt="" srcset="" /> */}
                <div className="window">
                    <div className="nav">
                        <div className="dots">
                            <div onClick={() => setWindowState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>

                        <div className="title"><p>jayaprakash - zsh</p></div>
                    </div>


                    <div className="main-content">
                        {children}
                    </div>
                </div>
            </Rnd>
        </div>
    )
}

export default MacWindows