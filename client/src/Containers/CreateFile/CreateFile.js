import React , { Component }from 'react';
import classes from './CreateFile.css';
import axios from "axios";
import Button from '../UI/Button/Button';

class CreateFile extends Component {
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
                mob:[],
                ss:"",
                smot:"",
                tt:"",
                tm:"",
                comm:"",
                perf:"",
                conf:""

        }

    }

   

    onChange = e =>{
        this.setState({[e.target.id] : e.target.value});
    }



    onSubmit = e =>{
        e.preventDefault();

        const userInfo ={
            name:this.state.name,
                des:this.state.des,
                lin:this.state.lin,
                exp:this.state.exp,
                ts:this.state.ts,
                hby:this.state.hby,
                lng:this.state.lng,
                frnt:this.state.frnt,
                back:this.state.back,
                dta:this.state.dta,
                mob:this.state.mod,
                ss:this.state.ss,
                smot:this.state.smot,
                tt:this.state.tt,
                tm:this.state.tm,
                comm:this.state.comm,
                perf:this.state.pref,
                conf:this.state.conf
            
        };
        
            console.log(userInfo);
            axios.post('http://localhost:5000/admin/createProfile',{userInfo})
            .then(res => {
                    console.log('done!!!');
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
                    <input type = "text" 
                    id= "lin"
                    value= {this.state.lin}
                    onChange={this.onChange} />
                </label>
           
                <label>
                    EDUCATION : 
                    <textarea value={this.state.exp}
                    id="exp"
                    onChange={this.onChange} />
                </label>
                <div>
                <label>
                    TECHNICAL SKILLS : 
                    <input type = "text" 
                    id= "ts"
                    value= {this.state.ts}
                    onChange={this.onChange} />

                </label>
                </div>
           
                <label>
                    HOBBIES :
                    <input type = "text" 
                    id= "hby"
                    value= {this.state.hby}
                    onChange={this.onChange} />
                </label>
           
                <label>
                    LANGUAGES : 
                    <input type = "text" 
                    id= "lng"
                    value= {this.state.lng}
                    onChange={this.onChange} />
                </label>

                <label>
                    FRONT-END SKILLS : 
                    <input type = "text" 
                    id= "frnt"
                    value= {this.state.frnt}
                    onChange={this.onChange} />
                </label>
                <label>
                    BACKEND SKILLS : 
                    <input type = "text" 
                    id= "back"
                    value= {this.state.back}
                    onChange={this.onChange} />
                </label>
                <label>
                    DATABASE SKILLS :
                    <input type = "text" 
                    id= "dta"
                    value= {this.state.dta}
                    onChange={this.onChange} />
                </label>
                <label>
                    MOBILE/TOOLS USED :
                    <input type = "text" 
                    id= "mob"
                    value= {this.state.mob}
                    onChange={this.onChange} />
                </label>
                <label>
                    SOFT SKILLS :
                    <input
                    type="text"
                    id="ss"
                    value={this.state.ss}
                    onChange={this.onChange}
                    ></input>
                </label>
                <label>
                    SELF-MOTIVATION :
                    <textarea
                     value={this.state.smot}
                    id="smot"
                    onChange={this.onChange} />
                </label>
                <label>
                    TEAMWORK :
                    <textarea value={this.state.tt}
                    id="tt"
                    onChange={this.onChange} />
                </label>
                <label>
                    TIME MANAGEMENT :
                    <textarea value={this.state.tm}
                    id="tm"
                    onChange={this.onChange} />
                </label>
                <label>
                    COMMUNICATION : 
                    <textarea value={this.state.comm}
                    id="comm"
                    onChange={this.onChange} />
                </label>
                <label>
                    PERFORMANCE :
                    <textarea value={this.state.perf}
                    id="perf"
                    onChange={this.onChange} />
                </label>
                <label>
                    CONFLICT RESOLUTION :
                    <textarea value={this.state.conf}
                    id="conf"
                    onChange={this.onChange} />
                </label>
                <Button btnType="submit" clicked={this.onSubmit}>SUBMIT</Button>
            </form>

        </div>
    );
}
}

export default CreateFile;