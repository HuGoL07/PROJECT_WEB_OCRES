import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
/*import InfoUserResult from './InfoUserResult'*/
import { Container, Form } from 'react-bootstrap'
import { recomposeColor } from '@mui/system'
import '../style/InfoUser.css'

const spotifyApi = new SpotifyWebApi({
    clientId: "c28c3a1f2ef7456c8f34324844a26c65"
})

export default function GetInfosUser({ accessToken }) {
    const [nameUser, setNameUser] = useState('')
    const [mailUser, setMailUser] = useState('')
    const [imageUser, setImageUser] = useState('')
    const [typeAccount, setTypeAccount] = useState('')


    //Des que la valeur de accessToken change, on re set la valeur avec setAccessToken
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    spotifyApi.getMe().then(res => {
        console.log(res)
        console.log('Retrieved data for ' + res.body['display_name'])
        // "Email is farukemresahin@gmail.com"
        console.log('Email is ' + res.body.email);

        // "Image URL is http://media.giphy.com/media/Aab07O5PYOmQ/giphy.gif"
        console.log('Image URL is ' + res.body.images[0].url);

        // "This user has a premium account"
        console.log('This user has a ' + res.body.product + ' account');
        setNameUser(res.body['display_name'])
        setMailUser(res.body.email)
        setTypeAccount(res.body.product)
        setImageUser(res.body.images[0].url)
    }).catch(err => {
        console.log('smthg went wrong: ' + err.message)
    })

    /*if(typeAccount === 'open')
    {
            setTypeAccount('Compte gratuit')
    }*/


    return (
        <Container >
            <div className = "UserInfo"> 
                <div className = "Text">
                {nameUser} {mailUser} {typeAccount}
                </div>
                <img class="circle" src={imageUser} width="150" height="150" alt="new"/>
            </div>           
        </Container>
    )
}