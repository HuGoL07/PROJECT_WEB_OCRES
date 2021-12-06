import React from 'react'
import '../style/MenuWidgets.css'
import { useState, ueEffect } from 'react'
import { Widgets } from "@mui/icons-material"
import { useSpring, animated, config } from 'react-spring'
import CreatePlaylist from './CreatePlaylist'
import SpotifyWebApi from 'spotify-web-api-node'
import UseAuth from './UseAuth'
import SearchWidget from './SearchWidget'
import GetInfosUser from './GetInfosUser'

function MenuWidgets({ code }) {

    const access_token = UseAuth(code)
    const [isOpen, setIsOpen] = useState(false)
    const props_menu = useSpring({ to: { opacity: 1 }, from: { opacity: -1 }, delay: 1000 })
    const title = 'Créer une playlist'
    const title2 = 'Votre profil'
    

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
                                <CreatePlaylist accessToken = { access_token }/>
                            </div>

                {/*--- WIDGET 2 ---*/}
                            <div className='widget2-container'>
                                <div className='widget2-banner'>
                                    <div className='widget2-title'>{title2} </div>
                                </div>
                                <GetInfosUser accessToken = { access_token }/>
                            </div>

                {/*--- WIDGET 3 ---*/}
                            <div className='widget3-container'>
                                <div className='widget3-banner'>
                                    <div className='widget3-title'> Rechercher une musique </div>
                                </div>
                                <div className='search-container'>
                                    <SearchWidget accessToken = { access_token } />
                                </div>
                            </div>

                {/*--- WIDGET 4 ---*/}
                            <div className='widget4-container'>
                                <div className='widget4-banner'>
                                    <div className='widget4-title'> Supprimer un titre </div>
                                </div>
                            </div>

                {/*--- WIDGET 5 ---*/}
                            <div className='widget1-container'>
                                <div className='widget1-banner'>
                                    <div className='widget1-title'> Vos titres </div>
                                </div>
                            </div>

                {/*--- WIDGET 6 ---*/}
                            <div className='widget6-container'>
                                <div className='widget6-banner'>
                                    <div className='widget6-title'> Notre API</div>
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
                        <CreatePlaylist accessToken = { access_token }/>
                    </div>

                    {/*--- WIDGET 2 ---*/}
                    <div className='widget2-container'>
                        <div className='widget2-banner'>
                            <div className='widget2-title'>{title2} </div>
                        </div>
                        <GetInfosUser accessToken = { access_token }/>
                    </div>

                    {/*--- WIDGET 3 ---*/}
                    <div className='widget3-container'>
                        <div className='widget3-banner'>
                            <div className='widget3-title'> Rechercher une musique </div>
                        </div>
                        <div className='search-container'>
                            <SearchWidget accessToken = { access_token } />
                        </div>
                    </div>

                    {/*--- WIDGET 4 ---*/}
                    <div className='widget4-container'>
                        <div className='widget4-banner'>
                            <div className='widget4-title'> Supprimer un titre </div>
                        </div>
                    </div>

                    {/*--- WIDGET 5 ---*/}
                    <div className='widget1-container'>
                        <div className='widget1-banner'>
                            <div className='widget1-title'> Vos titres </div>
                        </div>
                    </div>

                    {/*--- WIDGET 6 ---*/}
                    <div className='widget6-container'>
                        <div className='widget6-banner'>
                            <div className='widget6-title'> Notre API</div>
                        </div>
                        
                    </div>
            </div>
        </div>)
}

export default MenuWidgets
