import './home.css';
import {Helmet} from "react-helmet";
import React, { Component } from "react";
import man1 from "/Users/vishwas/Desktop/web_project/client/src/images/man1.jpg";
import h1 from "/Users/vishwas/Desktop/web_project/client/src/images/h.png";
import s1 from "/Users/vishwas/Desktop/web_project/client/src/home1.js";
import c1 from "./css/normalize.css";
import c2 from "./css/demo.css";
import c3 from "./css/component.css";
import s2 from "./js/classie.js";
import s3 from "./js/gnmenu.js";
//import s4 from "./js/new.js";
import Sidebar from './components/Sidebar';
class Login extends Component
{
    constructor(props,context)
    {
      super(props,context);
      this.state=
      {
        x :"",
        b:"a+",
        r:"0",
      }
      this.setxRef=(el)=>{this.xinput=el}
      this.call_search=this.call_search.bind(this);
      this.opt=this.opt.bind(this);
      this.corona=this.corona.bind(this);
    }
    call_search(e)
    {
        
        this.setState({x: e.target.value});
//        console.log(this.state.x+"  "+this.state.b+"  "+this.state.r);
        
        fetch('http://localhost:8001/search',
              {
                    method:'POST',
                    headers : {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                    },
                    body:JSON.stringify({
                                        r:this.state.r,
                                        b:this.state.b})
                  })
//                    .then((responseJson) => {
//                          if(responseJson.status==200)
//                          {
//                            console.log("succus")
//                          }
//
//                          })
                    .then(responseJson => responseJson.json())
        .then(data =>{                        if (this.state.x!="")
                                            {var A=[];
                                              document.getElementById("result").innerHTML="";
                                              for(var i=0;data[i];i++)
                                              {
              
                                                if(((data[i].add).includes(this.state.x)) && (this.state.x!="") && ((A.indexOf(data[i]))==-1))
                                                    {
                                                    A.push(data[i].email)
              var final = document.createElement("UI");
              var en = document.createElement("LI");
              var fnn = document.createElement("LI");
              var lnn = document.createElement("LI");
              
//                                                    document.getElementById("result").appendChild("<h1>data[i].email<h1/>" );
              var e = document.createTextNode("Email.I.D- "+data[i].email);
              var fn = document.createTextNode("Fullname- "+data[i].f_name);
              var ln = document.createTextNode("Lastname- "+data[i].l_name);
              en.appendChild(e);
              fnn.appendChild(fn);
              lnn.appendChild(ln);
              final.appendChild(fnn);
              final.appendChild(lnn)
              final.appendChild(en);
             ;
              document.getElementById("result").appendChild(final);
              document.getElementById("result").appendChild(document.createElement("BR"));
                                                    
                                                    }
                                              }}
              else{
              document.getElementById("result").innerHTML="";
              }
//                                              for(var i=0;A[i];i++)
//                                              {
//                                                if(this.state.x!="")
//                                                  {
//                                                        document.getElementById("result").innerHTML+=(A[i].email)+"/n";
//                                                  }
//                                              }
              }
                                              );
                    
    }

        
    opt(e)
    {
        this.setState({b: e.target.value});
        
    }
    corona(e)
    {
        this.setState({r: e.target.value});
    }
    render(){
       
      return (<div>
              
              
    
    <div style={{ height:"1350px" }} >
                
                <Sidebar/>
              
                  <img id="man1" src={man1} alt="p1"/>
                  <img id="man2" src={man1} alt="p2"/>
                  <img id="h1" src={h1} alt="p3"/>
              
            <img id="h2" src={h1} alt="p4"/>
                  <img id="h3" src={h1} alt="p5"/>
              <input id="home_input" type="text" onChange={this.call_search} />
              <label id="lable_input" htmlFor="home_input"alt="FIND BLOOD DONOR" placeholder="FIND BLOOD DONOR"></label>
            
              <br/>
             <br/>
              
              <h3 id="htree">BLOOD GROUP</h3>
                    <select id="select_"value={this.state.b} onChange={this.opt}>
                        <option value = "a+">A+</option>
                        <option value = "a-">A-</option>
                        <option value = "b+">B+</option>
                        <option value = "b-">B-</option>
                          <option value = "o+">O+</option>
                          <option value = "o-">O-</option>
                          <option value = "ab+">AB+</option>
                          <option value = "ab-">AB-</option>
                    </select>
            <h3 id="hfour">CORONA RECOVERD</h3>
              <lable id="lable1">YES</lable><input id="i1"type="radio" name="r1" onChange={this.corona} value={1}/>
              <lable id="lable2">NO</lable><input id="i2" type="radio" name="r1" onChange={this.corona} value={0} />
            <div id="result" ></div>
    </div>


</div>
              );}
    
}

export default Login;
