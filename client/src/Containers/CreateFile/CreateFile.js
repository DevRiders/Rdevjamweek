import React , { Component }from 'react';
import classes from './CreateFile.css';
import axios from 'axios';

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

    onChange = e =>{
        this.setState({[e.target.id] : e.target.value});
    }

    changeHandler (e,index){
        this.setState({[e.target.id[index]] : e.target.value});
    }


    onSubmit = e =>{
        e.preventDefault();

        const userInfo ={
            name:this.state.name,
                des:this.state.des,
                lin:this.state.lin,
                exp:this.state.exp,
                ts:[...this.state.ts],
                hby:this.state.hby,
                lng:[...this.state.lng],
                frnt:[...this.state.frnt],
                back:[...this.state.back],
                dta:[...this.state.dta],
                mob:[...this.state.mod],
                ss:this.state.ss,
                smot:this.state.smot,
                tt:this.state.tt,
                tm:this.state.tm,
                comm:this.state.comm,
                perf:this.state.pref,
            
        };
        
            console.log(userInfo);
            axios.post('http://localhost:5000/admin/createfile',{userInfo})
            .then(res => {
                    console.log(res);
                // made some changes................
                // <Link to= '/createfile'></Link>
                 
            }).catch(err => console.log(err));
    };

    render(){
        return(
        <div className={classes.Createfile}>
            <form>
                <label>
                    NAME :
                    <input type = "text" 
                    id = "name"
                    value = {this.state.name} 
                    onChange={this.onChange}/>
                 </label>
           
                <label>
                    DESIGNATION :
                    <input type = "text"
                     id = "des"
                     value= {this.state.des}
                     onChange = {this.onChange} />
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
                    {
                        this.state.ts.map((ts,index)=>{
                            return(
                                <div key={index}>
                                    <input onChange={(e)=>this.changeHandler(e,index)}
                                    value={ts}>
                                    </input>
                                </div>
                            )
                        })
                    }

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