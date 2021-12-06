import React from 'react'

const spotifyApi = new SpotifyWebApi({
    clientId: "18444da77ec54503b5cc6b14e953e402"
})

export default function AddToSavedTracks({track}) {

        spotifyApi.addToMySavedTracks(track.uri).then( res => {
            console.log('Son ajouté à votre playlist ' +track.uri)
        }).catch(err => {
            console.log(err)
            console.log('erreurs')
            console.log(track.uri)
        })
        
}
