import React from "react"
import mapIcon from "../images/map.png"

export default function Main(props){
    
    
    return(
        <>
        <div className="main">
            <img className="main--img" src={props.imageUrl} />
            <section className ="main--right">
                <p className="main--top"><img className ="main--map-icon" src={mapIcon}/><span className ="main--location">{props.location}</span><a className="grey-link" href={props.googleMapsUrl}>View on Google Maps</a></p>
                <h1>{props.title}</h1>
                <p className="main--date">{props.startDate} - {props.endDate}</p>
                <p className="main--desc">{props.description}</p>
            </section>
            
        </div>
        <hr className="line"/>
        </>
    )
}