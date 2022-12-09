import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import Login from './Login'

const Protectedroute = (props) => {
    const { Component, } = props
    const navigate = useNavigate();

    useEffect(() => {
        let user = localStorage.getItem("token")
        if (!user) {
            navigate("/login")
        }

    }, [props])

    return (
        <Component />
    )


};

export default Protectedroute