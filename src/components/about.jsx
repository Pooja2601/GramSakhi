import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export class about extends Component {
  render() {
    return (
      <Container id="about">    
      <Row>
        <Col xs={6} md={4} style={{textAlign:'center'}}>
        <img src="img/team/SanjeevniTai.jpg" style={{width:'250px', height:'350px', marginTop:'70px'}}/>
            <h4 style={{marginBottom:'5px'}}>डॉ संजीवनीताई सतीश केळकर</h4>
            <h4 style={{marginBottom:'5px', marginTop:'0'}}>अध्यक्ष</h4>
            <h4 style={{marginBottom:'0', marginTop:'0'}}><b>माता बालक उत्कर्ष प्रतिष्ठान प्रेरीत</b></h4>
        </Col>
        <Col xs={6} md={4}>
        <h2 style={{marginTop:'70px'}} className="about-text">ग्रामसखी</h2>
                <p style={{textAlign:"justify"}}>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h4 style={{marginBottom:'5px', marginTop:'0', textAlign:'center'}}>उत्कृष्ट चव,स्वच्छता व दर्जेदार पदार्थ हीच ओळख !</h4>
                <h4 style={{marginBottom:'0', marginTop:'0', textAlign:'center'}}><b>घरगुती चवीचा मनमुराद आस्वाद!</b></h4>
        </Col>
        <Col xs={6} md={4} style={{textAlign:'center'}}>
        <img src="img/team/sujata.jpg" style={{width:'250px', height:'350px', marginTop:'70px'}}/> 
            <h4 style={{marginBottom:'5px'}}>सुजाता सुरेश कुरे</h4>
            <h4 style={{marginBottom:'5px', marginTop:'0'}}> प्रवर्तक</h4>
            <h4 style={{marginBottom:'0', marginTop:'0'}}><b>ग्रामसखी फुड</b></h4>
        </Col>
      </Row>
    </Container>
    )
  }
}

export default about
