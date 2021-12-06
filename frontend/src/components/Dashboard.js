import { useEffect } from 'react'
import UseAuth from './UseAuth'
import React from 'react'
import Banner from './Banner'
//import Nav from './Nav'
//import MenuWidgets from './MenuWidgets'
import SpotifyWebApi from 'spotify-web-api-node'
import SearchWidget from './SearchWidget'
import CreatePlaylist from './CreatePlaylist'
import MenuWidgets from './MenuWidgets'

export default function Dashboard(/*{ /*code }*/) {

    //const access_token = UseAuth(code)

    return ( 
    <div>
        <Banner/>
        <MenuWidgets/>
        {/*<CreatePlaylist accessToken = { access_token }/>*/}

        {/*<SearchWidget accessToken = { access_token } />*/}   

    </div>
    )
}