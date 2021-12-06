import React, { useState, useEffect } from "react";
import '../style/Graphic.css'


function Graphic() {

    const [artistData1, setArtistData1] = useState();
    const [artistData2, setArtistData2] = useState();
    const [artistData3, setArtistData3] = useState();
    const [artistData4, setArtistData4] = useState();

    const [totalAlbums, setTotalAlbums] = useState(0);
    const [album1, setAlbum1] = useState('')
    const [album2, setAlbum2] = useState('')
    const [album3, setAlbum3] = useState('')
    const [album4, setAlbum4] = useState('')


    const url = "http://localhost:5000/artist";
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setArtistData1(data[0].name)
                setArtistData2(data[1].name)
                setArtistData3(data[2].name)
                setArtistData4(data[3].name)

                setAlbum1(data[0].nbrAlbums)
                setAlbum2(data[1].nbrAlbums)
                setAlbum3(data[2].nbrAlbums)
                setAlbum4(data[3].nbrAlbums)

                let sum = 0;
                data.forEach(function(obj) {
                    sum += obj.nbrAlbums;
                });
                console.log(data)
                setTotalAlbums(sum);
                console.log(sum)
            });
    }, []);


    // let pollOptions;
    // if (voteData) {
    //     pollOptions = voteData.map((item) => {
    //         return (
    //         <li key={item.id}>
    //             <button onClick={submitVote} data-id={item.id}>
    //             {item.option}
    //             <span>- {item.votes} Votes</span>
    //             </button>          
    //         </li>
    //         );
    //     });
    //     }

    return ( <
        div className = 'display_data' > { artistData1 } { album1 } { artistData2 } { album2 } { artistData3 } { album3 } { artistData4 } { album4 }

        <
        /div>
    )

}

export default Graphic;