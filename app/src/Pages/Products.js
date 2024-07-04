import Menu from '../Components/navbar.js';
import '../css/Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Row, Col, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Trend from '../Components/cardtrend.js';
import React from 'react';
import Loading from '../Components/loading.js';
import FooterPage from '../Components/footer.jsx';

class Products extends React.Component {

  render(){
    if(this.props.loading){
      return <Loading />
    }

    const newArray = this.props.products.filter(prd =>  prd.name.toLowerCase().includes(
      this.props.searchval.toLowerCase()) && 
      this.props.category.includes(prd.category) &&
      this.props.gender.includes(prd.gender) 
      && this.props.brand.includes(prd.brand) 
      && prd.price>this.props.low 
      && prd.price<this.props.high
    );
    return (
      
      <div>
        <Menu  
          SearchProduct={this.props.SearchProduct} 
          ChangeCategory={this.props.ChangeCategory} 
          ChangePriceRange={this.props.ChangePriceRange} 
          ChangeGender={this.props.ChangeGender} 
          ChangeBrand={this.props.ChangeBrand}
          cart={this.props.cart}
        />
        <Row>
          <Col className="Categories" xs={12} md={12} lg={2}>
            <Accordion defaultActiveKey="0">
              <h2>Filter</h2>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Categories
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>        
                    <button onClick={() => this.props.ChangeCategory(["Lifestyle"])}>Lifestyle</button>
                    <button onClick={() => this.props.ChangeCategory(["Running"])}>Running</button>
                    <button onClick={() => this.props.ChangeCategory(["Basketball"])}>Basketball</button>
                    <button onClick={() => this.props.ChangeCategory(["Football"])}>Football</button>
                    <button onClick={() => this.props.ChangeCategory(["Mercurial"])}>Mercurial</button>
                    <button onClick={() => this.props.ChangeCategory(["Lifestyle","Running","Football","Basketball","Mercurial"])}>All</button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Gender
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>                
                    <button onClick={() => this.props.ChangeGender(["Men"])}>Men</button>
                    <button onClick={() => this.props.ChangeGender(["Women"])}>Women</button>
                    <button onClick={() => this.props.ChangeGender(["Boys"])}>Boys</button>
                    <button onClick={() => this.props.ChangeGender(["Girls"])}>Girls</button>
                    <button onClick={() => this.props.ChangeGender(["Men","Women","Boys","Girls"])}>All</button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Search by Price
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>                
                    <button onClick={() => this.props.ChangePriceRange(0,50)}>Less than €50</button>
                    <button onClick={() => this.props.ChangePriceRange(50,100)}>€50 - €100</button>
                    <button onClick={() => this.props.ChangePriceRange(100,150)}>€100 - €150</button>
                    <button onClick={() => this.props.ChangePriceRange(150,1000)}>More than €150</button>
                    <button onClick={() => this.props.ChangePriceRange(0,1000)}>All</button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Brand
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <button onClick={() => this.props.ChangeBrand(["AirMax"])}>Air Max</button>
                    <button onClick={() => this.props.ChangeBrand(["AirForce"])}>Air Force</button>
                    <button onClick={() => this.props.ChangeBrand(["AirJordan"])}>Air Jordan</button>
                    <button onClick={() => this.props.ChangeBrand(["AirJordan","AirForce","AirMax"])}>All</button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col className="Products" xs={12} md={12} lg={10}>
            <Row>
              {newArray.length>0? newArray.map((u,key)=>
              <Col key="" xs={12} md={6} lg={4}>
              <Link to={"/ProductPage/"+u.id}  >
              <Trend price={u.price+" $"} name={u.name} photo={'http://localhost:1337' +u.img[0].url}/>
              </Link>
              </Col>):<h5>0 Products Found</h5>}                          
            </Row> 
          </Col>
        </Row>
        <FooterPage />
      </div>
  );
}
}
export default Products;