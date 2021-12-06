import { useEffect } from 'react'
import UseAuth from './UseAuth'
import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import SpotifyWebApi from 'spotify-web-api-node'
import SearchWidget from './SearchWidget'
import CreatePlaylist from './CreatePlaylist'
import GetInfosUser from './GetInfosUser'
import Graphic from './Graphic'

export default function Dashboard({ code }) {

    const access_token = UseAuth(code)

    return ( <
        div >
        <
        Banner / >
        <
        Nav / >

        <
        div className = 'container' >
        <
        Graphic / > {
            /* {/* <CreatePlaylist accessToken = { access_token }
                            className = 'widget_playlist' /> */
        } {
            /* <SearchWidget accessToken = { access_token }
                            className = 'widget_search' / > */
        } {
            /* <GetInfosUser accessToken = { access_token }
                            />  */
        }

        <
        /div>

        <
        /div>
    )
}