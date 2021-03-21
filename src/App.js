import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from './pages/home'
import Profile from './pages/profile'
import Signin from './pages/home'
import Signup from './pages/home'

import './App.css';

export default class App extends Component {
	render() {
		return (
			<Router>
                <Switch>
                    <Route path='/' exact render={() => <Home />}></Route>
                    <Route path='/profile' exact render={() => <Profile />}></Route>
                    <Route path='/signin' exact render={() => <Signin />}></Route>
                    <Route path='/signup' exact render={() => <Signup />}></Route>
                </Switch>
            </Router>
		)
	}
}
