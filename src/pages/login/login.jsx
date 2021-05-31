import React, { useEffect, useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { navigate } from '@reach/router'
import { APP_STATE } from '../../constants/app-state.constants'
import ImgDashboard from '../../assets/images/dashboard.svg'
import './login.scss'

export const Login = props => {

  const { appSessionState } = props

  const [showLogin, setShowLogin] = useState(undefined)

  const responseGoogle = async res => {
    if (res?.tokenId) {
      await localStorage.setItem('authTokenId', res.tokenId);
      await props.updateUserToken(res.tokenId);
      window.location.href = "/"
    }
  }

  const failureLogin = () => {

  }

  const getLoginDetails = async () => {
    try {
      if (APP_STATE.VALID_USER === appSessionState) {
        setShowLogin(false);
        return;
      } else if (APP_STATE.INVALID_USER === appSessionState) {
        setShowLogin(true);
        return;
      }
      const response = await props.authenticateUser();
      const details = response?.data?.payload;
      props.updateUserDetails(details)
      setShowLogin(false)
    }
    catch (error) {
      setShowLogin(true)
    }
  }

  useEffect(() => {
    document.title = "Terselink | Login"
    getLoginDetails();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (showLogin === false) {
      navigate("/")
    }
  }, [showLogin])

  if (showLogin === undefined) {
    return <div>Loading...</div>
  }

  return <div className="row full-screen-size" id="loginContainer">
    <div className="col-md-6 left-container d-flex flex-column justify-content-center align-items-center">
      <h2 className='header-title'>TerseLink</h2>
      <p className="tag-line">Powerful tool to shorten and protect URL's.</p>
      <img src={ImgDashboard} className="dashboard-icon" alt="Manage your stats" />
      <p className="contact-us"><strong>About Terselink</strong> | <strong>Contact Us</strong> | <strong>About Us</strong></p>
    </div>
    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
      <h2 className='welcome-header'>Welcome Back</h2>
      <p className="login-instruction">Please login to your account</p>
      <p className="login-instruction">Use this account to access your created shortened links and stats.</p>
      <GoogleLogin
        className="google-login-btn"
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText='Continue with Google'
        onSuccess={responseGoogle}
        onFailure={failureLogin}
        cookiePolicy={'single_host_origin'}
      />
      <p className="privacy-policy-instruction">
        By Logging in you accept the <strong>Terms of service</strong> &amp; <strong>Privacy policy</strong>
      </p>
    </div>
  </div>
}

export default Login
