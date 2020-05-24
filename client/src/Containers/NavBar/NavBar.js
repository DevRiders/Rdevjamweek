import React ,{ Component } from 'react';
import classes from './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <div className={classes.Nav}>
                <h3><NavLink to='/profiles'>Profile</NavLink></h3>
                <h3><NavLink to='/createprofile'>CreateProfile</NavLink></h3>
                <h3><NavLink to='/'>Logout</NavLink></h3>
            </div>

        );
    }
}
export default NavBar;