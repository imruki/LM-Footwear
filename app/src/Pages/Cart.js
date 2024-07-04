import Menu from '../Components/navbar.js';
import '../css/Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Row, Col, Accordion, InputGroup, FormControl,Modal,Form} from 'react-bootstrap';
import Item from "../Components/Item";
import React from 'react';
import Toaster from '../Components/Toaster';
import Loading from '../Components/loading.js';
import FooterPage from '../Components/footer.jsx';
import axios from 'axios';

class Cart extends React.Component {
  constructor(){
    super();
    this.state = {
      showToast : false,
      showModal : false,
      name:"",
      total : 0
    }
  }
  paymentCheck =() =>{
    if (this.props.cart.length>0){
      this.setState({showModal:true})
    }
    else{
      this.setState({showToast:true})
    }
  }
  faisles2 = () => {
    this.makeOrder()
    this.props.EmptyCart()
    this.hideModal()
    this.setState({total:0})
  }
  hideToast = () => this.setState({showToast:false})
  hideModal = () => this.setState({showModal:false})
  render(){
    if(this.props.loading){
      return <Loading />
    }

    let newCart = [];
    this.props.cart.forEach(prod => {
      if(newCart.find(pr => pr.id===prod.id)){
        newCart[newCart.findIndex(pr => pr.id===prod.id)].quantity++
      }else{
        prod = {...prod,quantity:1}
        newCart.push(prod)
      }
      this.state.total+=prod.price
    });

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

      {this.state.showModal?
        <Modal.Dialog animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Payment</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text"
              placeholder="name" 
              value={this.state.name} 
              onChange={e => this.setState({name: e.target.value, total:0})}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal} >Close</Button>
            <Button variant="primary" onClick={this.faisles2} >Pay</Button>
          </Modal.Footer>
        </Modal.Dialog>
      : null}
      <Row>
        <Col key="" xs={12} md={12} lg={{ span: 4, offset: 3 }}>
          {newCart.length>0 ? newCart.map((u,key)=>
            <>
            <Item  className='ce'>
              <Card>
                <Card.Img variant="top" src={'http://localhost:1337' +u.img[0].url} alt='description '/>
                <Card.Body>
                  <Card.Title>{u.name}</Card.Title>
                    <Card.Text>
                      {u.price+" $"}
                    </Card.Text>
                  <Card.Text>
                    {"Quantity : "+(u.quantity)}
                  </Card.Text>
                  <Button  
                    variant="info" 
                    className='button-delete' 
                    onClick={() => {
                      this.props.deleteArticleFromCart(key);
                      this.setState({total:0}
                    )}}>
                      Delete
                  </Button>
                </Card.Body>
              </Card>
            </Item>
            </>
            ):<h5>Your Cart is empty</h5>}
        </Col>

        <Col className="Cart" xs={12} md={12} lg={3}>
          {this.state.showToast?
          <Toaster message="Your cart is empty" hideToast={this.hideToast} />
          : null}
          <Card>
            <Card.Header>
            <h2>Summary</h2>
            </Card.Header>
            <Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Do you have a promotional code?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Promotional code"
                    aria-label="Promotional code"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">Apply</Button>
                    </InputGroup.Append>
                </InputGroup>
              </Accordion.Collapse>
            </Accordion>

            <p>Subtotal</p>
            <p>Estimated pick-up and shipping costs</p>
            <p>Total {this.state.total.toFixed(2)}</p>

            <Button  
            variant="info"  
            onClick={() => {
              this.paymentCheck();
              this.setState({total:0}
            )}}>
              Payment
            </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <FooterPage />
    </div>

  );
}
makeOrder = async () => {
  await axios.post("http://localhost:1337/commandes", {
    name:this.state.name,
    totalPrice:this.state.total,
    totalProducts:this.props.cart.length,
    cart: this.props.cart
  }
  )
}
}

export default Cart;
