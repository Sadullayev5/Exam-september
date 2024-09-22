import React, { lazy , Suspense} from 'react'
const Home = lazy(() => import('./Home/Home'))
const Login = lazy(() => import('./Login/Login'))
const Register = lazy(() => import('./Register/Register'))
const Profile = lazy(() => import('./Profile/Profile'))
const SinglePage = lazy(() => import('./SinglePage/SinglePage'))
const Private = lazy(() => import('./Private/Private'))
const NotFound = lazy(() => import('./NotFound/NotFound'))
import { useRoutes } from 'react-router-dom'


const RouteController = () => {

    return useRoutes([
        {
            path : '/',
            element : <Suspense><Home/></Suspense>
        },
        {
            path : '/login',
            element : <Suspense><Login/></Suspense>
        },
        {
            path : '/register',
            element : <Suspense><Register/></Suspense>
        },
        {
            path : '/profile',
            element : <Suspense><Private/></Suspense>,
            children : [
                {
                    path : '/profile/',
                    element : <Suspense><Profile/></Suspense>
                }
            ]
        },
        {
            path : `/singlepage/:id`,
            element : <Suspense><SinglePage/></Suspense>
        },
        {
            path : '*',
            element : <Suspense><NotFound/></Suspense>
        }
    ])

  
}

export default RouteController