import React from "react";
import "./App.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Echr from "./echr.png";
import echr from "./components/home/aihm_home.png";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";
import Aihmbasvuru from "./components/kurumsal/AihmBasvuru";




function App() {
  return (
    <Router>
      <div className="App">
        
          
        
        <div className="col-12 medya-div" style={{display:'flex', justifyContent:'flex-end',float:"right",marginTop:"3rem",marginRight:"1rem"}}>
        <a href="/"><img className="logo" src={echr}></img></a>
                 &nbsp;
                  <a
                    href="https://wa.me/+905376971155"
                    target="_blank"
                    style={{ float: "left" }}
                  >
                    <PhoneIcon className="icon_top" />
                    
                  </a>
                  <p className="top_icon_info">&nbsp;0537 697 11 55</p>

                  
          </div>
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          
          <div className="interior">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hakkimizda" component={Home} />
            <Route exact path="/aihm-basvurusu" component={Aihmbasvuru} />
         
            
          
          </Switch>

          </div>

          

          <div className="roof-phone">
                <a
                    href="tel: +905376971155"
                    className="phone_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneIcon className="phone-icon"/>
                </a>
            </div>
            <div className="roof-whatsapp">
                <a
                    href="https://wa.me/+905376971155"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="whatsapp-icon"/>   
                </a>
            </div>

        
      </div>
    </Router>
  );
}

export default App;
