import React ,{ Component }from 'react';
import classes from './App.css';
import Login from './Containers/Login/Login';
import {BrowserRouter , Route} from 'react-router-dom';
import CreateFile from './Containers/CreateFile/CreateFile';
class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className={classes.App}>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/createfile" component={CreateFile}></Route>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
