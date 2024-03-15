import React from 'react'
import { useState, useEffect } from 'react'
import UseAuth from './UseAuth'
import { Container, Form } from 'react-bootstrap'
import '../style/SearchWidget.css'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'
import { TrackChangesOutlined } from '@mui/icons-material'

const spotifyApi = new SpotifyWebApi({
    clientId: "18444da77ec54503b5cc6b14e953e402"
})

export default function SearchWidget({ accessToken }) {

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    let songUri = []

    console.log(searchResults)

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
        let cancel = false

        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {

                const smallestAlbumImage = track.album.images.reduce((smallest,
                    image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url,
                }
            }))
        })
        return () => cancel = true
    }, [search, accessToken])

    function AddToSavedTracks({track}){
        spotifyApi.addToMySavedTracks(track.uri).then( res => {
            console.log('Son ajouté à votre playlist ' +track.uri)
        }).catch(err => {
             console.log(err)
             console.log('erreurs')
             console.log(track.uri)
         }, [accessToken])
    }

    // onClick = {
    //     ({ track }) => {
    //         spotifyApi.addToMySavedTracks()
    //         spotifyApi.addToMySavedTracks(['20I6sIOMTCkB6w7ryavxtO']).then(res => {
    //             // console.log('Son ajouté à votre playlist ' +track.uri)
    //             console.log('ok son ajouté')
    //         }).catch(err => {
    //             console.log(err)
    //             console.log('erreurs')
    //         })
    //     }

    return ( 
        <Container className = 'widget_container' >
            <Form.Control type = "search" placeholder = "Chercher musique" value = { search } onChange = { e => setSearch(e.target.value) }
            style = {
                { width: '50%' }
            }/>   

            <div className = "displayed_content" > {searchResults.map(track => ( <TrackSearchResult track = { track }
                        key = { track.uri }/>))
                    } 
            </div>

        </Container>
    )
}