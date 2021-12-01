import React from 'react'
import { useState, ueEffect } from 'react'
import { Widgets } from "@mui/icons-material"
import '../style/Nav.css'
import { useSpring, animated, config } from 'react-spring'

function Nav() {

    const [isOpen, setIsOpen] = useState(false)
    const props_menu = useSpring({ to: { opacity: 1 }, from: { opacity: -1 }, delay: 1000 })


    return isOpen ? (

        <
        div className = 'navbar_open' >
        <
        animated.div style = { props_menu } >

        <
        h2 className = 'navbar-toggle-title'
        onClick = {
            () => setIsOpen(false)
        } >
        Fermer <
        /h2>                 <
        div className = 'navbarMenu' >
        <
        h2 className = 'navbarTitle' > Menu < /h2>  <
        ul className = 'navbarList' >

        <
        li className = 'navbarListItem active' >
        <
        Widgets className = 'navbarIcon' / > Widget1 <
        /li>

        <
        li className = 'navbarListItem' >
        <
        Widgets className = 'navbarIcon' / > Widget2 <
        /li> 

        <
        li className = 'navbarListItem' >
        <
        Widgets className = 'navbarIcon' / > Widget3 <
        /li> 

        <
        li className = 'navbarListItem' >
        <
        Widgets className = 'navbarIcon' / > Widget4 <
        /li>

        <
        li className = 'navbarListItem' >
        <
        Widgets className = 'navbarIcon' / > Widget5 <
        /li> 

        <
        li className = 'navbarListItem' >
        <
        Widgets className = 'navbarIcon' / > Widget6 <
        /li> 

        <
        /ul>  < /
        div > <
        /animated.div>      < /
        div >

    ) : (



        <
        div className = 'navbar_closed' >
        <
        h2 className = 'navbar-toggle-title'
        onClick = {
            () => setIsOpen(true)
        } >
        Ouvrir le menu < /h2>  < /
        div >

    )
}


export default Nav;