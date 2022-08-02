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
import aihm2 from "./components/kurumsal/Aihm2";
import aihm3 from "./components/kurumsal/Aihm3";
import aihm4 from "./components/kurumsal/Aihm4";
import aihm5 from "./components/kurumsal/Aihm5";
import aihm6 from "./components/kurumsal/Aihm6";
import aihm7 from "./components/kurumsal/Aihm7";
import aihm8 from "./components/kurumsal/Aihm8";
import aihm9 from "./components/kurumsal/Aihm9";
import aihm10 from "./components/kurumsal/Aihm10";




function App() {
  return (
    <Router>
      <div className="App">
        
          
        
        <div className="col-12 medya-div" style={{display:'flex', justifyContent:'flex-end',float:"right",marginTop:"3rem",marginRight:"1rem"}}>
        <a href="/"><img className="logo" title="AİHM Başvurusu" src={echr}></img></a>
                 &nbsp;
                  <a
                    href="https://wa.me/+95376971155"
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
            <Route exact path="/aihm-basvuru" component={Aihmbasvuru} />
            <Route exact path="/aihme-kimler-basvurabilir" component={aihm2} />
            <Route exact path="/aihm-basvuru-sartlari" component={aihm3} />
            <Route exact path="/aihme-basvurular" component={aihm4} />
            <Route exact path="/aihm" component={aihm5} />
            <Route exact path="/aihm-yapisi" component={aihm6} />
            <Route exact path="/anayasa-mahkemesi" component={aihm7} />
            <Route exact path="/aihm-basvuru-yollari" component={aihm8} />
            <Route exact path="/aihm-basvuru-formu" component={aihm9} />
            <Route exact path="/aihme-dosya-sorgulama" component={aihm10} />

         
            
          
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
