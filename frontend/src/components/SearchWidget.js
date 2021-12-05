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

export default function SearchWidget({ accessToken }) {

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

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
                    albumUrl: smallestAlbumImage.url

                }
            }))
        })

        return () => cancel = true
    }, [search, accessToken])

    return ( <
        Container className = 'widget_container' >
        <
        Form.Control type = "search"
        placeholder = "Chercher musique"
        value = { search }
        onChange = { e => setSearch(e.target.value) }
        style = {
            { width: '50%' } }
        />   

        {
            /* <div className = "flex-grow-1 my-2"
                            style = {
                                { overflowY: "auto", color: "white" } } > {
                                searchResults.map(track => ( 
                                    <TrackSearchResult track = { track }
                                    key = { track.uri } />
                                ))
                            } 
                            </div>   */
        } 
        <div className = "displayed_content" > {
            searchResults.map(track => ( 
                <TrackSearchResult track = { track }
                    key = { track.uri }
                />
            ))
        } 
        </div>

        </Container>
    )
}