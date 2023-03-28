import React from "react"
import troll from "../assets/troll.png"

export default function Header() {
    return (
        <div className="header">
            <img src={troll} className="header--logo"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </div>
    )
}