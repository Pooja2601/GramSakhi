import React, { Component } from "react";


export class Navigation extends Component {
  
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top" style={{fontFamily:'Hind'}}>
       <span> <img src="img/testimonials/tempsnip.png" style={{width:'150px', height:'66px', marginLeft:'-88px',marginTop:'-26px'}}/> </span>      ग्रामसखी  <sup>&#174;</sup><sub><span style={{marginLeft:'-37px'}}><img src="img/testimonials/fssai.png" style={{width:'50px'}}/></span><sub>21517215000658</sub></sub>
         </a>{" "}
            <br/>
            <span style={{marginLeft:'90px', color:'#b1819f'}}>टेस्टी अँड होममेड</span>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
            <li>
                <a href="#about" className="page-scroll">
                ग्रामसखी विषयी
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
                पदार्थ
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                गॅलरी
                </a>
              </li>
              {/* <li>
                <a href="#team" className="page-scroll">
                टीम
                </a>
              </li> */}
              <li>
                <a href="#contact" className="page-scroll">
                संपर्क
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
        <marquee direction="right" behavior="alternate"  style={{marginLeft:'-15px',marginRight:'-56px', width:'103%',fontSize:'20px', marginBottom:'-16px', color:"white", background:'linear-gradient(to right, #9D376E 0%, #F4ADCD 100%)'}} hspace="-100" scrolldelay="100" height="30"><span><img src="img/testimonials/download.png" style={{width:"30px"}}/></span> क्रुपया जिल्हानिहाय वितरक करिता पुढील क्रमांकावर संपर्क करा | <i class="fa fa-whatsapp" aria-hidden="true"></i> +91 97301 79726 <span><img src="img/testimonials/download.png" style={{width:"30px"}}/></span></marquee>
        </div>
      </nav>
    );
  }
}

export default Navigation;
