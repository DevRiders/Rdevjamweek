import React,{Component} from 'react';
import classes from './Login.css';
import Button from '../UI/Button/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
   constructor(){
       super();
       this.state = {
           username: "",
           password: "",
           isLoggedIn: false
       };
      // this.handleRes = this.handleRes.bind(this);
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
                    this.setState({
                        isLoggedIn: res.data.isLoggedIn
                    });  
                // made some changes................
                // <Link to= '/createfile'></Link>
                 
            }).catch(err => console.log(err));
    };

   


    render(){
        let redirect = null;
        if(this.state.isLoggedIn) {
            redirect= <Redirect to="/createfile"/>
        }
        
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
              {redirect}

            </form>
        </div>
    );

    }
}

export default Login;