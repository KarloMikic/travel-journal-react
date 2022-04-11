import React from "react"
import logo from "../images/logo.png"

export default function Nav(){
    return(
        <nav className="navbar">
            <img className="navbar--img" src={logo}/>
            <h3 className="navbar--h3">My travel journal</h3>
        </nav>
    )
}