import React, { useState } from 'react'
import { Navbar } from './components/navbar.js'
import { Details } from './components/details.js'
import { Home } from './components/home.js'
import  { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './index.css'

export let App = () => {

    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/details" component={Details}/>
            </Switch>
        </Router>
    )
}