/*Ce premier widget aura pour but d'afficher un album de PNL*/
import '../style/Widget1.css'
import React from 'react'

export default function Widget1() {

    return ( 
        
        <div className = 'widget1_position' >
            <iframe src = "https://open.spotify.com/embed/album/6axBxUXvSfVkbiBU6AH3jH?utm_source=generator"
            width = "100%"
            height = "380"
            frameBorder = "0"
            allowfullscreen = ""
            allow = "autoplay; clipboard - write; encrypted - media; fullscreen; picture - in -picture "> 
            </iframe >
        </div>
    )
}