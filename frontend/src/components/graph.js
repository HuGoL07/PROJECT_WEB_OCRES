import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const [artistData1, setArtistData1] = useState();
const [artistData2, setArtistData2] = useState();
const [artistData3, setArtistData3] = useState();
const [artistData4, setArtistData4] = useState();

const [totalAlbums, setTotalAlbums] = useState(0);
const [album1, setAlbum1] = useState('')
const [album2, setAlbum2] = useState('')
const [album3, setAlbum3] = useState('')
const [album4, setAlbum4] = useState('')
/*const data = [

    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];*/
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie
                    data={data}
                    cx={420}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        );
    }
}