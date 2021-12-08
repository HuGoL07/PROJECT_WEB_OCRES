import { CleaningServices } from '@mui/icons-material'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function AddTracksToBdd() {

    const [nameArtist, setNameArtist] = useState('')
    const [nameAlbum, setNameAlbum] = useState('')
    
    const addToList = () => {
        axios.post("http://localhost:3002/insert", {
            artistName: nameArtist,
            nameAlbum: nameAlbum
        });;
    }
    return (

        <div className = 'content_form' >
        <label> Artist name: </label> <input type = "text"
        onChange = {
            (event) => { setNameArtist(event.target.value) }
        }/> 
        <label > Album name: </label> 
        <input type = "text"
        onChange = {
            (event) => { setNameAlbum(event.target.value) }
        }/> 
        <button onClick = { addToList } > Ajouter a la liste </button>     
        </div>
    )
}

export default AddTracksToBdd;
