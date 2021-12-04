import React from 'react'
/*import '../style/Widget.css'
import '../style/Nav.css'*/
import '../style/MenuWidgets.css'
import { useState, ueEffect } from 'react'
import { Widgets } from "@mui/icons-material"
import { useSpring, animated, config } from 'react-spring'

function MenuWidgets() {

    const [isOpen, setIsOpen] = useState(false)
    const props_menu = useSpring({ to: { opacity: 1 }, from: { opacity: -1 }, delay: 1000 })
    const title = 'Recommandation de titres'
    const title2 = 'Sauvegarder un titre'

    return isOpen ? (

        <div className='main-comportement'>
            <div className='navbar_open'>
                <animated.div style={props_menu}>
                    <h2 className='navbar-toggle-title' onClick={() => setIsOpen(false)}>Fermer </h2>

                    <div className='navbarMenu' >
                        <h2 className='navbarTitle' > Menu </h2>
                        <ul className='navbarList' >
                            <li className='navbarListItem active' >
                                <Widgets className='navbarIcon' /> Widget1 </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Widget2 </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Widget3 </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Widget4 </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Widget5 </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Widget6 </li>

                        </ul>
                    </div >
                </animated.div>
            </div >
            <div className='globalWidgets-Container'>

                {/*--- WIDGET 1 ---*/}
                            <div className='widget1-container'>
                                <div className='widget1-banner'>
                                    <div className='widget1-title'>{title} </div>
                                </div>
                            </div>

                {/*--- WIDGET 2 ---*/}
                            <div className='widget2-container'>
                                <div className='widget2-banner'>
                                    <div className='widget2-title'>{title2} </div>
                                </div>
                            </div>

                {/*--- WIDGET 3 ---*/}
                            <div className='widget1-container'>
                                <div className='widget1-banner'>
                                    <div className='widget1-title'> Ajouter une playlist </div>
                                </div>
                            </div>

                {/*--- WIDGET 4 ---*/}
                            <div className='widget2-container'>
                                <div className='widget2-banner'>
                                    <div className='widget2-title'> Supprimer un titre </div>
                                </div>
                            </div>

                {/*--- WIDGET 5 ---*/}
                            <div className='widget1-container'>
                                <div className='widget1-banner'>
                                    <div className='widget1-title'> Vos titres </div>
                                </div>
                            </div>

                {/*--- WIDGET 6 ---*/}
                            <div className='widget2-container'>
                                <div className='widget2-banner'>
                                    <div className='widget2-title'> Notre API</div>
                                </div>
                            </div>
            </div>
        </div>)

        : (
        <div className='main-comportement'>
            <div className='navbar_closed' >
                <h2 className='navbar-toggle-title' onClick={() => setIsOpen(true)}>Ouvrir le menu </h2>    
            </div>
            <div className='globalWidgets-Container'>
                    {/*--- WIDGET 1 ---*/}
                    <div className='widget1-container'>
                        <div className='widget1-banner'>
                            <div className='widget1-title'>{title} </div>
                        </div>
                    </div>

                    {/*--- WIDGET 2 ---*/}
                    <div className='widget2-container'>
                        <div className='widget2-banner'>
                            <div className='widget2-title'>{title2} </div>
                        </div>
                    </div>

                    {/*--- WIDGET 3 ---*/}
                    <div className='widget1-container'>
                        <div className='widget1-banner'>
                            <div className='widget1-title'> Ajouter une playlist </div>
                        </div>
                    </div>

                    {/*--- WIDGET 4 ---*/}
                    <div className='widget2-container'>
                        <div className='widget2-banner'>
                            <div className='widget2-title'> Supprimer un titre </div>
                        </div>
                    </div>

                    {/*--- WIDGET 5 ---*/}
                    <div className='widget1-container'>
                        <div className='widget1-banner'>
                            <div className='widget1-title'> Vos titres </div>
                        </div>
                    </div>

                    {/*--- WIDGET 6 ---*/}
                    <div className='widget2-container'>
                        <div className='widget2-banner'>
                            <div className='widget2-title'> Notre API</div>
                        </div>
                    </div>
            </div>
        </div>)
}

export default MenuWidgets
