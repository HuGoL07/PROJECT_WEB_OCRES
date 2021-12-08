import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Widget1 from './Widget1'
import '../style/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './Dashboard'
import Login from './Login'
import UseAuth from './UseAuth'

///Permet de récupérer le token affiché dans l'url et de le passer en paramètre à Dashboard
const code = new URLSearchParams(window.location.search).get('code')

function App() {
    return code ? < Dashboard code = { code }
    /> : <Login/ >
}



export default App