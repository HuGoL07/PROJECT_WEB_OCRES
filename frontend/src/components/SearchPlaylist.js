import React from 'react'

const spotifyApi = new SpotifyWebApi({
    clientId: "18444da77ec54503b5cc6b14e953e402"
})

export default function SearchPlaylist({accessToken}) {

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    spotifyApi.SearchPlaylist()

    return (
        <div>
            
        </div>
    )
}
