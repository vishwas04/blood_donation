
import React, { Component } from "react";
import Login from "./login.js"
import Home from "./home.js"
import Signup from "./signup.js"
import Deregister from "./deregister.js"
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom";
import {PrivateRoute} from "./protect"
import Sidebar from './components/Sidebar';
import Images from "./image.js"
import Video from "./videos.js"
import Aboutus from "./AboutUs.js"
import Contactus from "./contact.js"
class App extends Component
{
    
    render()
    {
        const { match, location, history } = this.props;
        return(
               
    <Switch>
    <Route exact path="/" component={Login}/>
    <PrivateRoute exact path="/home" component={Home} />
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/deregister" component={Deregister}/>
    <PrivateRoute exact path="/images" component={Images}/>
    <PrivateRoute exact path="/vidoes" component={Video}/>
    <PrivateRoute exact path="/aboutus" component={Aboutus}/>
    <PrivateRoute exact path="/contact" component={Contactus}/>
    </Switch>
               
               );
    }
}

export default App;
