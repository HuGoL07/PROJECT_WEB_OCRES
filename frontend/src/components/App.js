import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Widget1 from './Widget1'
import '../style/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './Dashboard'
import MenuWidgets from './MenuWidgets'
import Login from './Login'
import UseAuth from './UseAuth'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
    return code ? 
    <div>
    <Banner/>
    <MenuWidgets code = {code}/>  
    
    </div>
    
    : <Login/>
    
}


// function App(){
//     return code ? 
//         <div>
//             <Banner/>
//             <Nav/>

//             {/* <div className = "widget_container">
//                 <Widget1/>
//             </div>  */}
        
//         </div> : 

//         <Login/>
        
// }


// function App() {
//     return ( 
//         <div>
       
//             <Banner/>
//             <Nav/>
            
//             <div className = "widget_container">
//                 <Widget1/>
//             </div> 
             
//         </div>
//     )
// } 


export default App