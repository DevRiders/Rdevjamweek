import React ,{ Component } from 'react';
import classes from './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <div className={classes.Nav}>

                <ul>
                <li>   <NavLink to='/profiles'>Profile</NavLink></li> 
                <li>       <NavLink to='/createprofile'>CreateProfile</NavLink> </li>
                   <li><NavLink to='/'>Logout</NavLink></li></ul>
            </div>

        );
    }
}
export default NavBar;