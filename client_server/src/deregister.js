import './deregister.css';
import React, { Component } from "react";
//import heart1 from '/Users/vishwas/Desktop/web_project/client/src/images/red1.jpg'
//import auth from "./auth"
//import { withRouter } from "react-router";

class Deregister extends Component
{
    
    constructor(props,context)
        {
          super(props,context);
          this.state=
          {
            email: "",
            pass :""
          }
          this.seteRef=(el)=>{this.einput=el}
          this.setpRef=(el)=>{this.pinput=el}
          this.submit_fun=this.submit_fun.bind(this);
        }

        submit_fun(e)
        {
            
          fetch('http://localhost:8001/delete',{
            method:'POST',
            headers : {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
            },
            body:JSON.stringify({
                                email:this.einput.value,
                                pass1:this.pinput.value})
          })
            .then(responseJson => responseJson.json())
            .then((data) => {
                  console.log(data.r);
                  if(data.r){
                    alert("DEREGITRATION DONE")
                    window.location.href ="http://localhost:3000"
                  }
                  else
                  {
                    alert("EMAIL OR PASSWORD DID'T MATCH")
                    window.location.href ="http://localhost:3000/deregister"
                  }
                  

            })
            .catch((error) => {
                   alert("DEREGISTRATION FAILED");
              console.log("error")
            });
          
        }
    
                
    render(){
        
      return (
              
              
    <div className="full" >
          <br/><br/>
        <div className="dabsolute">
          <h1>DEREGISTRATION</h1>
              <h4>WE SHALL IMPROVE SOON</h4>
              <div  >
                  <lable id="dlable">EMAIL</lable>  <input type="email" name="email" ref={this.seteRef}/>
                  <br/>
                  <br/>
                  <lable id="dlable">PASSWORD</lable>  <input type="password" name="pass1" ref={this.setpRef}/>
                  <br/>
                  <br/>
                  
              <button type="sumbit" value={0} onClick={this.submit_fun}>CONFIRM</button>
                  
              </div>
        </div>
        
    </div>

              );}
    
}

export default Deregister;
