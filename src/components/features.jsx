import React, { Component } from "react";
import Tooltip from '@material-ui/core/Tooltip';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import Modal from './Modal';


const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1em",
        color: "white",
        backgroundColor: "black"
      }
    }
  }
});

export class features extends Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
    console.log('clicked')
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-sm-10 col-sm-offset-1 section-title">
            <h2 style={{marginTop:'30px', marginBottom:'-60px'}}>पदार्थ</h2>
          </div>
          <div className="row">
          <MuiThemeProvider theme={defaultTheme}>
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-lg-6 col-lg-4">
                    {" "}
                    <MuiThemeProvider theme={theme}>
                    <Tooltip title="क्लिक करा" arrow>
                    <a href={d.img1}> <img src={d.img} style={{width:"220px", height:'150px'}}/>
                    </a>
                    </Tooltip>
                    </MuiThemeProvider>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  
                    {/* <Modal show={this.state.show} handleClose={this.hideModal}>
                    <img src={d.details} alt="" />{" "}
                    </Modal> */}
                     {/* {this.props.data
              ? this.props.data.map((d,i) => ( <Modal show={this.state.show} handleClose={this.hideModal}>
                      <div>
        <img key={d.i} src={d.img1} style={{width:'400px', height:'500px', margin:'50px 77px'}}/>
        </div>
        </Modal>
         ))
         : "Loading..." } */}
           
                  </div>
                ))
              : "Loading..."}
                </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default features;
