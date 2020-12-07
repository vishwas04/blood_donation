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

class Login extends Component
{
    
        
    render(){
       
      return (
              <div>
    <div className="header">
              <meta charSet="UTF-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>BLOOD DONATION</title>
              <meta name="description" content="A sidebar menu as seen on the Google Nexus 7 website" />
              <meta name="keywords" content="google nexus 7 menu, css transitions, sidebar, side menu, slide out menu" />
              <meta name="author" content="Codrops" />
              <link rel="shortcut icon" href="../favicon.ico" />
              <link rel="stylesheet" type="text/css" href={c1} />
              <link rel="stylesheet" type="text/css" href= {c2}/>
              <link rel="stylesheet" type="text/css" href= {c3}/>
              <script src={s1}></script>
     </div>
    <div style={{ height:"1300px" }} >
             
                <div className="container">
                      <ul id="gn-menu" className="gn-menu-main">
                          <li className="gn-trigger">
              <a className="gn-icon gn-icon-menu"><span>Menu</span></a>
                              <nav className="gn-menu-wrapper">
                                  <div className="gn-scroller">
                                      <ul className="gn-menu">
                                          <li className="gn-search-item">
                                              <input placeholder="Search" type="search" className="gn-search"/>
                                              <a href="/#" className="gn-icon gn-icon-search"><span>Search</span></a>
                                          </li>
                                          <li><a href="/#" className="gn-icon gn-icon-pictures">Images</a></li>
                                          <li><a href="/#" className="gn-icon gn-icon-videos">Videos</a></li>
                                          <li><a href="/#" className="gn-icon gn-icon-cog">Settings</a></li>
                                          <li><a href="/#" className="gn-icon gn-icon-help">Help</a></li>
                                          
                                              
                                          
                                      </ul>
                                  </div>
                              </nav>
                          </li>
                         
                          <li><a className="codrops-icon codrops" href="/signup.html"><span>about us</span></a></li>
                          <li><a className="codrops-icon codrops-icon-drop" href="/signup.html">contact us</a></li>
                          <li><a className="codrops-icon codrops-icon-prev" href="/#"><span>logout</span></a></li>
                      </ul>
                      
                  </div>
              <script src={s2}></script>
              <script src={s3}></script>
              
              <script>
                  new gnMenu( document.getElementById( 'gn-menu' ) );
              </script>
                  <img id="man1" src={man1} alt="p1"/>
                  <img id="man2" src={man1} alt="p2"/>
                  <img id="h1" src={h1} alt="p3"/>
                  <img id="h2" src={h1} alt="p4"/>
                  <img id="h3" src={h1} alt="p5"/>
    
    </div>
</div>
              );}
    
}

export default Login;
