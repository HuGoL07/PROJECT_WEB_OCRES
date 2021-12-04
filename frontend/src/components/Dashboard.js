import { useEffect } from 'react'
import UseAuth from './UseAuth'
import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import SpotifyWebApi from 'spotify-web-api-node'
import SearchWidget from './SearchWidget'

export default function Dashboard({ code }) {

    const access_token = UseAuth(code)

    return ( 
    <div>
        <Banner / >
        <Nav / >
        <SearchWidget accessToken = { access_token } />  

    </div>
    )
}