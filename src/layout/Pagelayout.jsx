import React from 'react'
// import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

const Pagelayout = () =>{
    return(
        <>
            {/* <Navbar/> */}
            <Outlet/>
        </>
    )
}


export default Pagelayout