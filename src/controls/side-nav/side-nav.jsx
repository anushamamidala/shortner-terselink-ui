import React, { useMemo } from 'react'
import { MenuRoutes } from '../../constants/menu-routes.constants'
import { navigate } from '@reach/router'
import v4 from 'uuid/v4'
import './side-nav.scss'

const SideNav = props => {
    const { userDetails, location } = props;
    const profileImageSource = userDetails?.picture;

    const matchedPathId = useMemo(() => {
        if (location.pathname.includes("profile")) {
            return "profile"
        }
        if(location.pathname.includes("links")){
            return "links"
        }
        return "home"
    }, [location.pathname])

    return (
        <div id="sideNavContainer">
            <div className="profile-peek-container d-flex align-items-center flex-column">
                <img src={profileImageSource} alt="user profile" className="profile-picture" />
                <div className='d-flex justify-content-center flex-column'>
                    <div className="profile-name">{userDetails?.given_name || ''}</div>
                </div>
            </div>
            <div className="side-menu-items-container">
                {
                    MenuRoutes.map(item => {
                        if (item.hideWhenAuthenticated) {
                            return null
                        }
                        return <div key={v4()} className={matchedPathId === item.id ?
                            "selected-side-menu-item side-menu-item" : "side-menu-item"}
                            onClick={() => navigate(item.path)}>
                            <img src={item.imageSource} className="menu-icon" alt='menu-icon' />{item.text}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SideNav;