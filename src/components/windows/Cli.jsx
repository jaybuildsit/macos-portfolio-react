import React from 'react'
import MacWindows from './MacWindows'
import { ReactTerminal } from "react-terminal-component-new";
import './cli.scss'
const Cli = ({ windowName, setWindowState }) => {

    const commands = {
        help: "Available commands: help, about"
    };
    return (
        <MacWindows windowName={windowName} setWindowState={setWindowState} >
            <div className="cli-window">
                <ReactTerminal
                    commands={{
                        echo: (args) => args.join(" "),
                        help: () => commands.help,
                        about: () => "This is a CLI Terminal built with React."
                    }}
                        welcomeMessage={"Welcome to the CLI Terminal. Type 'help' to see available commands."}
                    

                    // welcomeMessage={"Welcome to the CLI Terminal. Type 'help' to see available commands."}
                    // promptLabel={"jp@macos:~$"}
                />
            </div>
        </MacWindows>
    )
}

export default Cli