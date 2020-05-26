import React  from 'react';
import classes from './NavBar.css';
import { NavLink } from 'react-router-dom';
//import axios from 'axios';

const navBar = (props) =>{
        return(
            
            <div className={classes.Nav}>
                <ul>
                <li>   <NavLink to='/profiles'>Profile</NavLink></li> 
                <li>       <NavLink to='/createprofile'>CreateProfile</NavLink> </li>
                   <li><NavLink to='/'>Logout</NavLink></li></ul>
            </div>

        );
    }


export default navBar;