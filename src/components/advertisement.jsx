import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from  'react-bootstrap/Button';


class BasicAd extends Component {
  render() {
    return (
      <Modal.Dialog style={{position:'absolute', top:'139px', left:'375px', zIndex:'1', background: 'linear-gradient(to bottom right, red, yellow)'}} show={this.props.show} onHide={this.handleClose}>
  <Modal.Header closeButton onClick={this.props.close} style={{background: 'linear-gradient(to right, #fff 0%, #fc9003 100%)'}}>
    <Modal.Title style={{textAlign:'center', fontFamily:'Lucida Handwriting'}}>Ganpati Offer!!</Modal.Title>
  </Modal.Header>

  <Modal.Body style={{background:'linear-gradient(to bottom right, red, yellow)'}}>
    <img src="img/Chakali.jpeg" style={{width:'100%', height:'300px'}}/>
  </Modal.Body>

  <Modal.Footer style={{textAlign:'center', background: 'linear-gradient(to right, #fc9003 0%, #fff 100%)'}}>
    <Button variant="outline-warning" onClick={this.props.close}>Close</Button>
  </Modal.Footer>
</Modal.Dialog>
      
    );
  }
}
export default BasicAd;