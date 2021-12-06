import React from 'react'
import { useState, useEffect } from 'react'
import UseAuth from './UseAuth'
import { Container, Form } from 'react-bootstrap'
import '../style/SearchWidget.css'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'
import { CleaningServices } from '@mui/icons-material'
import '../style/CreatePlaylist.css'


const spotifyApi = new SpotifyWebApi({
    clientId: "c28c3a1f2ef7456c8f34324844a26c65"
})

export default function CreatePlaylist({ accessToken }) {

    let playlistId;

    //Initialisation du nom de la playlist avec du contenu vide
    const [namePlaylist, setNamePlaylist] = useState("")
    const [descriptionPlaylist, setDescriptionPlaylist] = useState("")

    /// Va nous permettre d'attendre que l'utilisateur clique sur creer avant d'envoyer la requête 
    const [wait, setWait] = useState(true)

    //Des que la valeur de accessToken change, on re set la valeur avec setAccessToken
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    ///Function qui prend en parametre le booléen wait 
    ///Si wait === false, on demande à effectuer la requête avec en parametre 
    /// nom playlist et description playlist, qu'on récupère plus bas dans le onChange()...

    function sendRequest(wait) {
        if (wait === false)
            spotifyApi.createPlaylist(namePlaylist, { 'description': descriptionPlaylist })
            .then(res => {
                console.log('Ok. Playlist created!');
                playlistId = res.body['id'];
                console.log(res)
                alert('Felicitations, vous pourrez vous enjailler en écoutant votre playlist ' + namePlaylist)

            }, [accessToken]).catch(err => {
                console.log(err)
                console.log(descriptionPlaylist)
            })
    }

    return (

        <Container className = 'playlist_container'> 
        <Form.Control type = "namePlaylist"
        placeholder = "Nom de la playlist que vous voulez créer"
        value = { namePlaylist }
        onChange = {
            e => {
                setNamePlaylist(e.target.value)
            }
        }
        style = {
            { width: '50%' }
        }/>  

        <Form.Control type = "descriptionPlaylist"
        placeholder = "Description de la playlist"
        value = { descriptionPlaylist }
        onChange = {
            e => {
                setDescriptionPlaylist(e.target.value)
            }
        }
        style = {
            { width: '50%' }
        }/>          

        <div className = "create_button" >

        <a className = "btn btn-success btn-lg"
        onClick = {
            () => {
                ///Si on clique sur le bouton créer playlist, on met la valeur de wait à false et on 
                /// appel la fonction qui effectue la requête avec wait en paramètres
                setWait(false)
                sendRequest(wait)
            }
        }>Creer playlist </a>  
        </div >
        </Container>
    )

}