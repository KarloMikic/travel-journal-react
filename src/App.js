import React from "react"
import Nav from "./components/Nav.js"
import Main from "./components/Main.js"
import data from "./data.js"

export default function App(){
    const cards = data.map(item => {
        return(
            <Main 
                key = {item.id}
                {...item}
            />
        )
    })
    return(
        <div>
            <Nav />
            {cards}
        </div>
    )
}