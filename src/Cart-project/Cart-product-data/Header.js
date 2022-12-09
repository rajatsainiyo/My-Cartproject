import React, { useState } from 'react'
// import { product_Data } from './Apidata'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { NavLink, BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    const myarry = useSelector((state) => state.Cart_item.cartarry)
    const navgate = useNavigate()
    const Logout = () => {
        const userout = localStorage.removeItem("token")
        if (userout !== null) {
            navgate("/login")
        }

    }


    return (
        <>
            <div className="container-fluid navbar-header">
                <div className="navbar navbar-expand-sm">
                    {localStorage.getItem("token") ? null :
                        <div className="col"> <NavLink className="home-text " to="./signup"><b> User Registration</b></NavLink></div>}
                    {localStorage.getItem("token") ?
                        <div className="col"> <NavLink className="home-text " to="./home"><b> HOME</b></NavLink></div> : null}
                    {localStorage.getItem("token") ?
                        <div className="col">  <NavLink className='about-text' to="./about"><b>ABOUT</b></NavLink></div> : null}
                    {localStorage.getItem("token") ?
                        <div className="col"> <NavLink className='cart-text' to="./cartitem"><b> <AddShoppingCartIcon /> Cart({myarry.length}) </b></NavLink></div> : null}
                    {localStorage.getItem("token") ?
                        <NavDropdown className='cart-text' title='Logout'>
                            <NavDropdown.Item onClick={Logout}>logout</NavDropdown.Item>
                            <NavDropdown.Item> <NavLink className='about-text' to="./about"><b>ABOUT</b></NavLink></NavDropdown.Item>
                        </NavDropdown>

                        : null

                    }


                </div>
            </div>


            <product_Data />

        </>
    )
}

export default Header