import React,{Component} from 'react';
import classes from './Login.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
   constructor(){
       super();
       this.state = {
           username: "",
           password: ""
       };
    }

    onChange = e =>
    {
        this.setState({ [e.target.id]: e.target.value});
    };

    onSubmit = e =>{
        e.preventDefault();

        const userData ={
            username: this.state.username,
            password: this.state.password
        };
            console.log(userData);
            axios.post('http://localhost:5000/admin/login',{userData})
            .then(res => {
                // made some changes................
                // <Link to= '/createfile'></Link>
                console.log(res);
                console.log(res.data);
                console.log(res.data.Status);
                console.log(res.data.isLoggedIn);
            }).catch(err => console.log(err));
    };

    render(){
        
    return (
        <div className={classes.Log}>
            <h1>Login to create your profile!</h1>
            <form>
                <label htmlFor="username"> 
                    Username:
                    <input type="text" id="username" value={this.state.username}  onChange={this.onChange} />
                    </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" id="password"  value={this.state.password} onChange={this.onChange} />
                </label>
                
                <Button btnType="submit" clicked={this.onSubmit}>SUBMIT</Button>
              

            </form>
        </div>
    );

    }
}

export default Login;