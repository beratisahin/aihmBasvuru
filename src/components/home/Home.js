import React from "react";
import Hakkımızda from "../kurumsal/hakkimizda/Hakkimizda";
import Mail from "../contact-page/mail/Mail";
import aihm from "./aihm_home.png";
import aihm2 from "./aihm2.png";
import "./Home.css"

function Home() {
  return (
    <div >
      

      <div className="col-12 hakkımız" style={{ borderRadius: "1rem"}}>
        <img className="main_photo" src={aihm} style={{justifyContent:"center",margin:"auto",display:"block"}}></img>
        <Hakkımızda />
      </div>

      <div className="row m-2">
        
        
        

        <div className="col-sm-12 col-12 mail">
          <Mail/>
        </div>

        <div className="col-sm-12 col-12 harita" style={{align:"center",display:"block",margin:"auto"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1133685566365!2d32.85313495091108!3d39.91647909373412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa98c0228db%3A0xc9a7c33401732590!2sMe%C5%9Frutiyet%2C%20Karanfil%20Sk.%20No%3A38%2C%2006420%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1611506437965!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",paddingBottom:"0.5rem",paddingTop:"0.5rem",border:"2px solid #499078"}}> </iframe>
        </div> 
        <br/>

      </div>
    </div>
  );
}

export default Home;
