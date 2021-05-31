import ImgHome from '../assets/icons/home.png'
import ImgProfile from '../assets/icons/user.png'
import ImgLinks from '../assets/icons/links.png'

export const RoutePaths = {
    HOME: "/",
    LOGIN: "/login",
    NOT_FOUND: "/not-found",
    PROFILE: "/profile",
    LINKS: "/links"
}

export const MenuRoutes = [
    {
        id: 'login',
        text: "Login",
        isProtected: false,
        path: RoutePaths.LOGIN,
        hideWhenAuthenticated: true
    },
    {
        id: 'home',
        text: "Home",
        isProtected: true,
        path: RoutePaths.HOME,
        imageSource: ImgHome
    },
    {
        id: 'links',
        text: "Links",
        isProtected: true,
        path: RoutePaths.LINKS,
        imageSource: ImgLinks
    },
    {
        id: 'profile',
        text: "Profile",
        isProtected: true,
        path: RoutePaths.PROFILE,
        imageSource: ImgProfile
    },

]
