import React, { Component } from "react";
import BasicAd from './advertisement';
import Button from  'react-bootstrap/Button';


export class Header extends Component {
  state={
    show:false
  }
  componentWillMount(){
    this.setState({show:true})
  }
  handleClose=()=>{
    console.log('clicked')
    this.setState({show:false})
  }
  render() {
    return (
      <header id="header">
         <div className="intro">
         <div className="overlay">
            <div className="container">
               <div className="row">
                 {this.state.show ? <BasicAd show={this.state.show} close={this.handleClose}/> : '' }
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#about"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{background:'white', color:'black'}}
                  >
                    विषयी
                  </a>{" "}
                </div>
              </div>
            </div>
            </div>
            
          </div>
      </header>
    );
  }
}

export default Header;
