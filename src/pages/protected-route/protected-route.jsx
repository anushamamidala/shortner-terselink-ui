import React from 'react';
import Login from '../login'
import { APP_STATE } from '../../constants/app-state.constants.js';

const ProtectedRoute = props => {
  const { appSessionState, component: Component } = props
  return appSessionState === APP_STATE.VALID_USER ? <Component {...props}/> : <Login {...props} />
}

export default ProtectedRoute
