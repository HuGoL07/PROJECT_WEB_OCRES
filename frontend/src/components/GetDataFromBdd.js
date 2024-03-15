import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/GetDataFromBdd.css'


function GetDataFromBdd() {

    const [dataList, setDataList] = useState([])
    const [newArtistName, setNewArtistName] = useState("")

    useEffect(() => {

        axios.get('http://localhost:3002/read').then((response) => {
            setDataList(response.data)
        })
    }, [])

    const updateName = (id) => {
        axios.put('http://localhost:3002/update', {
            id: id,
            newArtistName: newArtistName,
        });
        alert('L artiste a bien ete remplacé par ' + newArtistName)
        console.log('Artiste bien modifié sur votre bdd')
    };

    const deleteArtist = (id) => {
        axios.delete(`http://localhost:3002/delete/${id}`, {
            id: id,
            newArtistName: newArtistName,
        });
        alert('L artiste a bien ete supprimé ')
        console.log('Artiste bien supprimer sur votre bdd')
    };

    return ( <
            div >
            <
            h1 > Food List < /h1> {
            dataList.map((val, key) => {
                return ( <
                    div key = { key }
                    className = 'artist' >
                    <
                    h3 > { val.artistName } < /h3>   <
                    h2 > { val.nameAlbum } < /h2>  <
                    input type = "text"
                    placeholder = "Nouvel artist"
                    onChange = {
                        (event) => { setNewArtistName(event.target.value); }
                    }
                    />

                    <
                    button onClick = {
                        () => updateName(val._id) } > Mettre à jour < /button>  <
                    button onClick = {
                        () => deleteArtist(val._id)
                    } > Supprimer < /button>  <
                    /div >
                )
            })
        } <
        /div>
)
}

export default GetDataFromBdd;