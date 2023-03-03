import React from "react"
import image from "../image/blob-960-960-0-0-fill.jpg"

export default function Navbar(){
    return(
        <nav>
            <img src={image} className="nav--icon" alt="" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">First project</h4>
        </nav>
    )
}