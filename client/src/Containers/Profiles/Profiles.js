import React , { Component } from 'react';
import NavBar from '../NavBar/NavBar';
//import { NavLink } from 'react-router-dom';
import Profile from './Profile/Profile';

class Profiles extends Component{
    constructor(){
        super();
        this.state = {
                name:"",
                des:"",
                lin:"",
                exp:"",
                ts:"",
                hby:"",
                lng:"",
                frnt:"",
                back:"",
                dta:"",
                mob:"",
                ss:"",
                smot:"",
                tt:"",
                tm:"",
                comm:"",
                perf:"",
                conf:""
        }
    };

    render(){
        
        return(
            <div>
                
                <NavBar/> 
                <Profile/>
            </div>
        );
    }
}
export default Profiles;
