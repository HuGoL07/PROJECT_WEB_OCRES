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
import Graphic from './Graphic'
import '../style/Graphic.css'
import AddTracksToBdd from './AddTracksToBdd'
import GetDataFromBdd from './GetDataFromBdd'

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
                                <Widgets className='navbarIcon' /> Créer une playlist </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Votre profil </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Rechercher une musique </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Top 4 artistes français </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Ajouter un album </li>

                            <li className='navbarListItem' >
                                <Widgets className='navbarIcon' /> Votre collection </li>

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
                                    <div className='widget4-title'> Top 4 artistes français </div>
                                </div>
                                <div className = 'graph-container'>
                                    <Graphic/>
                                </div>
                            </div>

                {/*--- WIDGET 5 ---*/}
                            <div className='widget5-container'>
                                <div className='widget5-banner'>
                                    <div className='widget5-title'> Ajouter un album </div>
                                </div>
                                <div className='add_container'> 
                                    <AddTracksToBdd/> 
                                </div>
                            </div>

                {/*--- WIDGET 6 ---*/}
                            <div className='widget6-container'>
                                <div className='widget6-banner'>
                                    <div className='widget6-title'> Votre collection</div>
                                </div>
                                <div className = 'data'>
                                    <GetDataFromBdd/>
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
                            <div className='widget4-title'> Top 4 artistes français  </div>
                        </div>
                        <Graphic/>
                    </div>

                    {/*--- WIDGET 5 ---*/}
                    <div className='widget5-container'>
                        <div className='widget5-banner'>
                            <div className='widget5-title'> Ajouter un album </div>
                        </div>
                        <div className='add_container'> 
                            <AddTracksToBdd/> 
                        </div>
                    </div>

                    {/*--- WIDGET 6 ---*/}
                    <div className='widget6-container'>
                        <div className='widget6-banner'>
                            <div className='widget6-title'> Votre collection</div>
                        </div>
                        <div className = 'data'>
                            <GetDataFromBdd/>
                        </div>
                    </div>
            </div>
        </div>)
}

export default MenuWidgets
