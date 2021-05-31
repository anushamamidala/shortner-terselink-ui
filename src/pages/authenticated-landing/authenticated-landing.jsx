import React from 'react'
import SideNav from '../../controls/side-nav'
import Home from '../home'
import Profile from '../profile'
import Links from '../links'
import { Router, Location } from '@reach/router'
import "./authenticated-landing.scss"

const AuthenticatedLanding = () => {
    return (
        <div className='d-flex full-screen-size' id="AuthenticatedLanding">
            <Location>
                {({ location }) => (
                    <>
                        <SideNav location={location} />
                        <Router id="authenticatedRouter" primary={false}>
                            <Home path="/" exact />
                            <Profile path="/profile" />
                            <Links path="/links" />
                        </Router>
                    </>
                )
                }
            </Location>
        </div>
    )
}

export default AuthenticatedLanding;