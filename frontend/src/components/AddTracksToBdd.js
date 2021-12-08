import { CleaningServices } from '@mui/icons-material'
import React from 'react'
import { useState, useEffect } from 'react'

function AddTracksToBdd() {

    const [nameArtist, setNameArtist] = useState('')
    const [nameAlbum, setNameAlbum] = useState('')
    const [wait, setWait] = useState(true)

    const url = "http://localhost:5000/postdata"
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            }).catch(err => {
                console.log(err)
            });
    }, []);

    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify([ {nameArtist: nameArtist ,  nameAlbum: nameAlbum }])
    //     };
    //     fetch(url, requestOptions).then(async res => {
    //         try{
    //             const data = await res.json()
    //             console.log('response data?', data)
    //         } catch(err) {
    //             console.log('error happened here')
    //             console.log(err)
    //         }
    //     })
    //         // .then(res => {res.json())
    //         // .then((res) => console.log(res))
    //         // .catch(err => console.log('erreur fetch: ' +err))

    // }, [request])
    function sendRequest(wait) {
        if (wait === true) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify([{ "nameArtist": nameArtist, "nameAlbum": nameAlbum }]),
            };
            fetch(url, requestOptions)
                .then(res => { res.json() })
                .then((res) => {
                    console.log(res)
                    console.log('test requete')
                    setWait(true)
                })
                .catch(err => console.log('erreur fetch: ' + err))
        }
    }

    return ( <
        div >

        <
        input type = "text"
        value = { nameArtist }
        onChange = { e => setNameArtist(e.target.value) }
        placeholder = "Nom artiste" /
        >

        <
        input type = "text"
        value = { nameAlbum }
        onChange = { e => setNameAlbum(e.target.value) }
        placeholder = "Nom album" /
        > <
        button onClick = {
            () => {
                console.log('click ok ')
                    // setNameArtist(nameArtist)
                    // setNameAlbum(nameAlbum)
                console.log(nameArtist)
                console.log(nameAlbum)
                setWait(false)
                sendRequest(wait)
            }
        } > Ajouter < /button>        {
        /* <form >
                                    <input type = 'nameArtist' name = 'nameArtist' value = { nameArtist }/> 
                                    <input type = 'nbrAlbum' name = '' value = { nbrAlbums }/> 
                                </form>               */
    }

    <
    /div>
)
}

export default AddTracksToBdd;