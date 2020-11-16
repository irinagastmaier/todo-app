import React from 'react'
import logo from "../Images/logo.png"
import {Link} from "react-router-dom"

export default function Navigation() {
    return (
        <nav>
            <div className="left">
                <Link to ="/">
                <img src={logo} alt="logo"/>  
                {/* you cannot write simply the image path ("/Images/logo.png") in react, you need to import it.   */}
                </Link>
            </div>
            <div className="right">
                <Link to="/about">About</Link>
            </div>

        </nav>
    )
}
