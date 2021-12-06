import React from 'react'
import { Container } from 'react'
import '../style/Login.css'
import { Link } from '@mui/material'
import UseAuth from './UseAuth'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=18444da77ec54503b5cc6b14e953e402&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public"

export default function Login() {
    return ( <
        div className = "login_button" >

        <
        a className = "btn btn-success btn-lg"
        href = { AUTH_URL } >
        Login With Spotify <
        /a>  <
        /div >

    )
}