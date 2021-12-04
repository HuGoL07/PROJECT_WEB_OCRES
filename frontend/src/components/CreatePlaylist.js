import React from 'react'
import { useState, useEffect } from 'react'
import UseAuth from './UseAuth'
import { Container, Form } from 'react-bootstrap'
import '../style/SearchWidget.css'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'


const spotifyApi = new SpotifyWebApi({
    clientId: "18444da77ec54503b5cc6b14e953e402"
})

export default function CreatePlaylist({ accessToken }) {

    let playlistId;
    const [namePlaylist, setNamePlaylist] = useState("")
        // const [descriptionPlaylist, setDescriptionPlaylist] = useState("")

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        spotifyApi.createPlaylist(namePlaylist)
            .then(res => {
                console.log('Ok. Playlist created!');
                playlistId = res.body['id'];
                console.log(res)

            }, [accessToken]).catch(err => {
                console.log(err)
            })
    })

    return ( <
        Container >
        <
        Form.Control type = "namePlaylist"
        placeholder = "Nom de la playlist que vous voulez créer"
        value = { namePlaylist }
        onChange = { e => setNamePlaylist(e.target.value) }
        style = {
            { width: '50%' }
        }
        />  

        { /* <Form.Control type="descriptionPlaylist" value={ descriptionPlaylist } onChange = {e => setDescriptionPlaylist(e.target.value)}/> */ }

        <
        div className = "login_button" >

        <
        a className = "btn btn-success btn-lg" >
        Creer playlist <
        /a>  <
        /div> <
        /Container>
    )

}