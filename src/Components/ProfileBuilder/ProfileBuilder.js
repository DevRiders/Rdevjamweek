import React,{Component} from 'react';
import Login from '../../Containers/Login/Login';
//import CreateFile from '../../Containers/CreateFile/CreateFile';

class ProfileBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
        login : {
                username : '',
                password : ''
        },
        createProfile : {
            name : '',
            des : '',
            lin : '',
            exp : ''
        }
        }
        //this.handleChangeLogin = this.handleChange.bind(this);
        //this.handleSubmitLogin = this.handleSubmit.bind(this);
    }
    handleChangeLogin(event) {
        console.log('donee');
        this.setState({...this.state.login, [event.target.name]:event.target.value});
        
    }
    handleSubmitLogin(event) {
        event.preventDefault();
        console.log('eeone');
        const userData = {
           ...this.state.login
        };
        console.log(userData);
    }
    render()
    {
        return(
            <div>
                <Login>
                    login = {this.state.login}
                    changeHandler = {this.handleChangeLogin}
                    submitHandler = {this.handleSubmitLogin}
                </Login>
                
            </div>
        );
    }
}
export default ProfileBuilder;