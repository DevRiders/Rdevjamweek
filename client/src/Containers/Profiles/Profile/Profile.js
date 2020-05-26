import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './Profile.css';

const profile = (props) => {
    return (
        <div className={classes.Profile}>
            <div className={classes.Pro}>
            <h1>profile 1</h1>
            </div>
       
      <div classname={classes.Btn}>
            <Button btnType="submit">VIEW</Button>
            <Button btnType="submit">EDIT</Button>
      </div>
      </div>
    );
}



export default profile;