import React from 'react'
import LogoImg from '../../assets/icons/logo.png'
import { MenuRoutes } from '../../constants/menu-routes.constants'
import { navigate } from '@reach/router'
import { APP_STATE } from '../../constants/app-state.constants'
import v4 from 'uuid/v4'
import './nav-bar.scss'

const NavBar = props => {
  const { appSessionState, location } = props;
  const navigateToHome = () => navigate('/');
  const currentPathName = location?.pathname;

  const logoutUser = async () => {
    localStorage.removeItem("authTokenId");
    window.location.href = "/login"
  }

  return (
    <nav id='mainNavBar'>
      <img src={LogoImg} alt='terselink logo' className='logo' onClick={navigateToHome} />
      <ul className='menu-option-container'>
        {MenuRoutes.map(item => {
          if (item.hideWhenAuthenticated && APP_STATE.VALID_USER === appSessionState) {
            return null;
          }
          if (item.isProtected) {
            return null;
          }
          return <li key={v4()} className={item.path === currentPathName ? "selected-route" : ""}
            onClick={() => navigate(item.path)} >
            {item.text}
          </li>
        })}
        {
          APP_STATE.VALID_USER === appSessionState &&
          <li onClick={logoutUser} className="logout-nav-item">Logout</li>
        }
      </ul>
    </nav>
  )
}

export default NavBar
