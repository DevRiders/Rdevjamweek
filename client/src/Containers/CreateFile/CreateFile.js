import React , { Component }from 'react';
import classes from './CreateFile.css';

class CreateFile extends Component {
    constructor(){
        super();
        this.state = {
                name:"",
                des:"",
                lin:"",
                exp:"",
                ts:[],
                hby:"",
                lng:[],
                frnt:[],
                back:[],
                dta:[],
                mob:[],
                ss:"",
                smot:"",
                tt:"",
                tm:"",
                comm:"",
                perf:"",

        }
    }
    render(){
        return(
        <div className={classes.Createfile}>
            <form>
                <label>
                    NAME :
                    <input type = "text" name = "name" />
                 </label>
           
                <label>
                    DESIGNATION :
                    <input type = "text" des = "des" />
                </label>
            
                <label>
                    LINK : 
                    <input type = "text" lin = "lin" />
                </label>
           
                <label>
                    EDUCATION : 
                    <textarea value='Write here your experiance' />
                </label>
            
                <label>
                    TECHNICAL SKILLS : 
                    <select value='select'>
                        <option value="Javascript">JAVASCRIPT</option>
                        <option value="reactJs">REACTJS</option>
                        <option value="reactNative">REACTNATIVE</option>
                        <option value="python">PYTHON</option>
                        <option value="nodeJs">NODEJS</option>
                        <option value="Mongodb">MONGODB</option>
                        <option value="mysql">MYSQL</option>
                    </select>

                </label>
           
                <label>
                    HOBBIES :
                    <input type="text" hobby="hobby"></input>
                </label>
           
                <label>
                    LANGUAGES : 
                    <select value="select">
                        <option value="Javascript">JAVASCRIPT</option>
                        <option value="reactJs">REACTJS</option>
                        <option value="reactNative">REACTNATIVE
                        </option>
                        <option value="python">PYTHON</option>
                        <option value="nodeJs">NODEJS</option>
                        <option value="Mongodb">MONGODB</option>
                        <option value="mysql">MYSQL</option>
                    </select>
                </label>

                <label>
                    FRONT-END SKILLS : 
                    <input type="text"
                    name="frnt">
                    </input>
                </label>
                <label>
                    BACKEND SKILLS : 
                    <input type="text"
                    name="back">
                    </input>
                </label>
                <label>
                    DATABASE SKILLS :
                    <input
                    type="text"
                    name="data">
                    </input>
                </label>
                <label>
                    MOBILE/TOOLS USED :
                    <input
                    type="text"
                    name="mobile">
                    </input>
                </label>
                <label>
                    SOFT SKILLS :
                    <input
                    type="text"
                    name="sskills"
                    ></input>
                </label>
                <label>
                    SELF-MOTIVATION :
                    <textarea value='Write here your experiance' />
                </label>
                <label>
                    TEAMWORK :
                    <textarea value='Write here your experiance' />
                </label>
                <label>
                    TIME MANAGEMENT :
                    <textarea value='Write here your experiance' />
                </label>
                <label>
                    COMMUNICATION : 
                    <textarea value='Write here your experiance' />
                </label>
                <label>
                    PERFORMANCE :
                    <textarea value='Write here your experiance' />
                </label>
                <label>
                    CONFLICT RESOLUTION :
                    <textarea value='Write here your experiance' />
                </label>
            </form>

        </div>
    );
}
}

export default CreateFile;