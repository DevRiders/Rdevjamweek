import React ,{ Component }from 'react';
import classes from './App.css';
import Login from './Containers/Login/Login';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Profiles from './Containers/Profiles/Profiles';
import CreateFile from './Containers/CreateFile/CreateFile';
//import NavBar from './Containers/NavBar/NavBar';
class App extends Component{
  render(){
  return (
    <BrowserRouter>
    
    <div className={classes.App}>
     
    <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/profiles" component={Profiles}></Route>
          <Route exact path="/createprofile" component={CreateFile}></Route>
          </Switch>
    </div>
    
    </BrowserRouter>
  );
}
}

export default App;
