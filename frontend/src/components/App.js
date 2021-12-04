import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
/*import Widget1 from './Widget1'*/
import '../style/App.css'
import Widget from './Widget'
import MenuWidgets from './MenuWidgets'

function App() {
    return ( 
        <div>
            <Banner/>
            <MenuWidgets/>   
        </div>
        /*<div className ='main_content'>
                <Nav/>
                <Widget/>
            </div>
        /*<Widget1/>*/ 
    )
}

export default App