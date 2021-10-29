import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavA} from '../Styles'

function Nav(props){
    return(
        <Navbar>
            <Link to="/"><NavA>Home</NavA></Link>
            <Link to="/about"><NavA>About</NavA></Link>
            <Link to="/dashboard"><NavA>Dashboard</NavA></Link>
        </Navbar>
    )
}

export default Nav