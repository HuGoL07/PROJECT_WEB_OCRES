import React from 'react'
import { Container } from 'react'
import '../style/Login.css'
import { Link } from '@mui/material'
import UseAuth from './UseAuth'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=c28c3a1f2ef7456c8f34324844a26c65&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public"

export default function Login() {
    return (
        
        <div className="login_button" >
            <a className="btn btn-success btn-lg" href={AUTH_URL} > Login With Spotify </a>
        </div >
    )
}