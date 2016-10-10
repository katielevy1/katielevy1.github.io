import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import Repos from './modules/Repos'
import About from './modules/About'
import Resume from './modules/Resume'
import Contact from './modules/Contact'
import { Router, Route, hashHistory } from 'react-router'
render((
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <Route path="/repos" component={Repos} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>
), document.getElementById('app'))
