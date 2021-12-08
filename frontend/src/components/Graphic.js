import React, { useState, useEffect } from "react";
import '../style/Graphic.css'
import { PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';


function Graphic() {

    //Variables qui vont prendre les valeurs des noms des artistes contenus dans le .json
    const [artistData1, setArtistData1] = useState();
    const [artistData2, setArtistData2] = useState();
    const [artistData3, setArtistData3] = useState();
    const [artistData4, setArtistData4] = useState();   

    const [totalAlbums, setTotalAlbums] = useState(0);
    
    //Variables qui vont prendre les valeurs du nombre d'albums par artiste 
    const [album1, setAlbum1] = useState('')
    const [album2, setAlbum2] = useState('')
    const [album3, setAlbum3] = useState('')
    const [album4, setAlbum4] = useState('')

    const COLORS = ['#0088FE', '#B525AF', '#FFBB28', '#FF8042'];

    const data = [

        { name: artistData1, value: album1 },
        { name: artistData2, value: album2 },
        { name: artistData3, value: album3 },
        { name: artistData4, value: album4 },
    ];


    //On effectue la requête depuis le backend pour récupérer les datas
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
                console.log(data)

                //On calcul le nombre total d'albums pour ensuite afficher le chart 
                let sum = 0;
                data.forEach(function (obj) {
                    sum += obj.nbrAlbums;
                });
                
                setTotalAlbums(sum);
                console.log(sum)
            });
    }, []);

    return (

        <div className='graphic-container'>
            <PieChart width={800} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx={150}
                    cy={120}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default Graphic;