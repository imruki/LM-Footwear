import Menu from '../Components/navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Row,Col,Button} from 'react-bootstrap';
import React from 'react';
import Loading from '../Components/loading.js';
import FooterPage from '../Components/footer.jsx';
import axios from 'axios';

class Admin extends React.Component {
  constructor(){
    super();
    this.state = {
        name: "",
        price: 0,
        gender: "",
        category:"",
        photos:[],
        description:"",
        stock37:0,
        stock38:0,
        stock39:0,
        stock40:0,
        stock41:0,
        stock42:0,
        stock43:0,
        stock44:0
        
    }
}
  render(){
    if(this.props.loading){
      return <Loading />
    }
  return (
    <div className="App">
      <Menu 
        SearchProduct={this.props.SearchProduct} 
        ChangeCategory={this.props.ChangeCategory} 
        ChangePriceRange={this.props.ChangePriceRange} 
        ChangeGender={this.props.ChangeGender} 
        ChangeBrand={this.props.ChangeBrand} 
        cart={this.props.cart} 
      />
      <h2>Add A Product</h2>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Col xs={12} md={6} lg={3}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="price" value={this.state.price} onChange={e => this.setState({price: e.target.value})}/>
          </Col>
        </Form.Group>
  
        <Form.Group controlId="exampleForm.ControlSelect1">  
          <Col xs={12} md={6} lg={3}>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" value={this.state.gender} onChange={e => this.setState({gender: e.target.value})}>
              <option>Men</option>
              <option>Women</option>
              <option>Boys</option>
              <option>Girls</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
      
          <Col xs={12} md={6} lg={3}>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" value={this.state.category} onChange={e => this.setState({category: e.target.value})}>
              <option>Lifestyle</option>
              <option>Football</option>
              <option>Baskteball</option>
              <option>Baskteball</option>
            </Form.Control>
          </Col>
        </Form.Group>
      <Form>
        <Col xs={12} md={6} lg={3}>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Images" value={this.state.photos} onChange={e => this.setState({photos: e.target.value})}/>
          </Form.Group>
        </Col>
      </Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Col xs={12} md={6} lg={3}>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={this.state.description} onChange={e => this.setState({description: e.target.value})}/>
        </Col>
      </Form.Group>
      <Row>
        <Col xs={12} md={4} lg={1}>
          <Form.Label>Stock 37</Form.Label>
          <Form.Control type="number" placeholder="Available Stock" value={this.state.stock37} onChange={e => this.setState({stock37: e.target.value})}/>
        </Col>
        <Col xs={12} md={4} lg={1}>
          <Form.Label>Stock 38</Form.Label>
          <Form.Control type="number" placeholder="Available Stock" value={this.state.stock38} onChange={e => this.setState({stock38: e.target.value})}/>
        </Col>
        <Col xs={12} md={4} lg={1}>
          <Form.Label>Stock 39</Form.Label>
          <Form.Control type="number" placeholder="Available Stock" value={this.state.stock39} onChange={e => this.setState({stock39: e.target.value})}/>
        </Col>
        <Col xs={12} md={4} lg={1}>
          <Form.Label>Stock 40</Form.Label>
          <Form.Control type="number" placeholder="Available Stock" value={this.state.stock40} onChange={e => this.setState({stock40: e.target.value})}/>
        </Col>
        <Col xs={12} md={4} lg={1}>
          <Form.Label>Stock 41</Form.Label>
          <Form.Control type="number" placeholder="Available Stock" value={this.state.stock41} onChange={e => this.setState({stock41: e.target.value})}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} lg={1}>
          <Form.Label>Stock 42</Form.Label>
          <Form.Control type="number" placeholder="Available Stock" value={this.state.stock42} onChange={e => this.setState({stock42: e.target.value})}/>
        </Col>
        <Col xs={12} md={4} lg={1}>
          <Form.Label>Stock 43</Form.Label>
          <Form.Control type="number" placeholder="Available Stock" value={this.state.stock43} onChange={e => this.setState({stock43: e.target.value})}/>
        </Col>
        <Col xs={12} md={4} lg={1}>
          <Form.Label>Stock 44</Form.Label>
          <Form.Control type="number" placeholder="Available Stock" value={this.state.stock44} onChange={e => this.setState({stock44: e.target.value})}/>
        </Col>
      </Row>
      <Button onClick={this.addNewArticle}>Submit</Button>
      </Form>
      <FooterPage />
    </div>
);
}
  addNewArticle = async () => {
    await axios.post("http://localhost:1337/shoes", {
      name:this.state.name,
      price:parseFloat(this.state.price),
      gender:this.state.gender,
      brand:this.state.brand,
      category:this.state.category,
      description:this.state.description,
      img:this.state.photos,
      stock37:parseInt(this.state.stock37),
      stock38:parseInt(this.state.stock38),
      stock39:parseInt(this.state.stock39),
      stock40:parseInt(this.state.stock40),
      stock41:parseInt(this.state.stock41),
      stock42:parseInt(this.state.stock42),
      stock43:parseInt(this.state.stock43),
      stock44:parseInt(this.state.stock44)
        
    })   
}
}

export default Admin;