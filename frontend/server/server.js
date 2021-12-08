const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require("cors");
const bodyParser = require("body-parser")


const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '18444da77ec54503b5cc6b14e953e402',
        clientSecret: '62d6026262a04e908c79643bbd190a98',
        refreshToken
    })

    // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expiresIn,
            })
        })
        .catch(() => {
            res.sendStatus(400)
        })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '18444da77ec54503b5cc6b14e953e402',
        clientSecret: '62d6026262a04e908c79643bbd190a98'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {

        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
        console.log('Connexion à spotify réussie')

    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001)