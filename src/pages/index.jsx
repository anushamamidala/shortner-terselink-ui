import React, { useState, useEffect } from 'react'
import ProtectedRoute from './protected-route'
import AuthenticatedLanding from './authenticated-landing'
import Login from './login'
import NotFound from './not-found'
import NavBar from '../controls/nav-bar'
import { Router, Redirect, Location, navigate } from '@reach/router'
import { APP_STATE } from '../constants/app-state.constants'
import { authenticateUser } from '../api/auth';
import { useDispatch } from 'react-redux'
import { updateUserDetails, updateUserToken } from '../redux/actions/user.actions'

const Root = () => {

    const [appSessionState, setAppSessionState] = useState(APP_STATE.LOADING);
    const dispatch = useDispatch()

    const getLoginDetails = async () => {
        try {
            const response = await authenticateUser();
            setAppSessionState(APP_STATE.VALID_USER);
            const details = response?.data?.payload
            dispatch(updateUserDetails(details))
        }
        catch (error) {
            navigate("/login")
            setAppSessionState(APP_STATE.INVALID_USER);
        }
    }

    const updateToken = async () => {
        const storeToken = await localStorage.getItem("authTokenId");
        if (storeToken) {
            await dispatch(updateUserToken(storeToken))
        }
        getLoginDetails();
    }

    useEffect(() => {
        updateToken();
        // eslint-disable-next-line
    }, [])

    if (appSessionState === APP_STATE.LOADING) {
        return <div>Loading..</div>
    }

    return <div>
        <Location>
            {({ location }) => (
                <>
                    <NavBar appSessionState={appSessionState} location={location} />
                    <Router id="mainRouter" primary={false}>
                        <NotFound path="/not-found" />
                        <Login path="/login" exact appSessionState={appSessionState} />
                        <ProtectedRoute path="/*" component={AuthenticatedLanding} appSessionState={appSessionState} />
                        <Redirect from="/" to="/not-found" default noThrow />
                    </Router>
                </>
            )
            }
        </Location>
    </div>
}

export default Root
