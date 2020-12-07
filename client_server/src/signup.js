import './signup.css';
import React, { Component } from "react";
import heart1 from '/Users/vishwas/Desktop/web_project/client/src/images/heart.gif'
class Signup extends Component
{
    constructor(props,context)
        {
          super(props,context);
          this.state=
          {
            f_name: "",
            l_name :"",
            email: "",
            pass1 :"",
            pass2: "",
            r :"0",
            b:"a+"
          }
            this.setfnRef=(el)=>{this.fninput=el}
            this.setlnRef=(el)=>{this.lninput=el}
            this.seteRef=(el)=>{this.einput=el}
            this.setp1Ref=(el)=>{this.p1input=el}
            this.setp2Ref=(el)=>{this.p2input=el}
            this.setaRef=(el)=>{this.ainput=el}
            this.setr1Ref=(el)=>{this.r1input=el}
            this.submit_fun=this.submit_fun.bind(this);
            this.corona=this.corona.bind(this);
            this.opt=this.opt.bind(this);
        }
//        componentDidMount(){
//            fetch('http://localhost:8000/login',{
//                method:'GET',
//                headers:{'Accept':'application/json'},
//            })
//
//            .then((res)=>res.json())
//            .then((res)=>this.setState({items:res}))
//        }
        submit_fun(e)
        {
            if (this.fninput.value =="" || this.lninput.value=="" ||this.einput.value =="" || this.p1input.value=="" || this.ainput.value=="")
            {
                alert("feild can't be empty");
                return;
            }
            if (this.p1input.value.length <=8)
            {
                alert("password mininum 8 chars requied");
                return;
            }
            if (this.p1input.value != this.p2input.value)
            {
                alert("passwords did't match");
                return;
            }
          fetch('http://localhost:8001/signup1',{
            method:'POST',
            headers : {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
            },
            body:JSON.stringify({
                                f_name:this.fninput.value,
                                l_name:this.lninput.value,
                                email:this.einput.value,
                                pass1:this.p1input.value,
                                pass2:this.p2input.value,
                                add:this.ainput.value,
                                r:this.state.r,
                                b:this.state.b,
                                })
          })
            .then((responseJson) => {
                  if(responseJson.status==200)
                        window.location.href ="http://localhost:3000"
                  else alert("signup FAILED");
            })
            .catch((error) => {
              console.log("error")
            });
        }
    
    corona(e)
    {
        this.setState({r: e.target.value});
    }
    
    opt(e)
    {
        this.setState({b: e.target.value});
        
    }
    render(){
        
      return (
              
              
              <div className="full" >
            <br/><br/>
            <div id="login">
            <h1>JUST FEW DETAILS...</h1>
              
                    <lable>FIRST NAME</lable> <input type="text" name="f_name" ref={this.setfnRef} required></input>
                    <br/>
                    <br/>
                    <lable>LAST NAME</lable>  <input type="text" name="l_name" ref={this.setlnRef} required pattern=".*\S+.*" title="This field is required"/>
                    <br/>
                    <br/>
                    <lable>EMAIL</lable>  <input type="email" name="email" ref={this.seteRef} required pattern=".*\S+.*" title="This field is required"/>
                    <br/>
                    <br/>
                    <lable>PASSWORD</lable>  <input type="password" name="pass1" ref={this.setp1Ref}  required pattern="[A-Za-z]{8}" title="min of 8 char requied!!!"/>
                    <br/>
                    <br/>
                    <lable>CONFIRM PASSWORD</lable>  <input type="text" name="pass2" ref={this.setp2Ref} required/>
                    <br/>
                    <br/>
                    <lable>ADDRESS</lable><br/>
                    <textarea row="3" coloum="3" name="add" ref={this.setaRef}  required="required" ></textarea>
                    <br/>
                    <br/>
                    <lable>CORONA RECOVERD PATIENT</lable>
                    <br/>
                
                    <lable>YES</lable><input type="radio" name="r1" onChange={this.corona} value={1}/>
                    <br/>
                    <lable>NO</lable><input type="radio" name="r1" onChange={this.corona} value={0} checked="checked"/>
                    
              <h3>BLOOD GROUP</h3>
                    <select value={this.state.b} onChange={this.opt}>
                        <option value = "a+">A+</option>
                        <option value = "a-">A-</option>
                        <option value = "b+">B+</option>
                        <option value = "b-">B-</option>
                          <option value = "o+">O+</option>
                          <option value = "o-">O-</option>
                          <option value = "ab+">AB+</option>
                          <option value = "ab-">AB-</option>
                    </select>
              <br/>
              <br/>
                    <button type="sumbit" value={0} onClick={this.submit_fun}>CONFIRM</button>
                    
                
            </div>
    </div>

              );}
    
}

export default Signup;
