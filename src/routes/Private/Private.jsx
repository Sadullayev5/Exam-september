import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
    const {token} = useSelector(state => state.auth);

    if(!token) return <Navigate to="/login" />
    return <Outlet/>
}

export default Private