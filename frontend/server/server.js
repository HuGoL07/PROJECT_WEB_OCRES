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
        clientId: 'c28c3a1f2ef7456c8f34324844a26c65',
        clientSecret: 'eb936631f44c4847bda50c23d669b775',
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
        clientId: 'c28c3a1f2ef7456c8f34324844a26c65',
        clientSecret: 'eb936631f44c4847bda50c23d669b775'
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