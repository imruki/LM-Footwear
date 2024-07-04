import Menu from '../Components/navbar.js';
import '../css/ProductPage.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Accordion,Form} from 'react-bootstrap';
import Loading from '../Components/loading.js';
import FooterPage from '../Components/footer.jsx';

class ProductPage extends React.Component {
    constructor(){
        super();
        this.state = {
            pointure: "",
        }
    }
    render(){
        console.log(this.props.loading);
        if(this.props.loading){
            return <Loading />
        }
        const product = this.props.products.find(prd => prd.id==this.props.match.params.id);
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
            <Col className="Content" xs={12} md={12} lg={{ span: 5, offset: 2 }}>
                <Row>
                    {product.img.map((u,key)=>{
                        if(key!=0){
                        return (
                            <Col xs={12} md={8} lg={6}>
                                <img src={'http://localhost:1337' + u.url} alt=""/>
                            </Col>
                        )}
                    })}
                </Row>
            </Col>
            <Col className="ProductPage" xs={12} md={12} lg={3}>
                <h2>{product.name}</h2>
                <h3>{product.price+" $"}</h3>
                <p>Select Size</p>
                <Form.Control as="select" value={this.state.gender} onChange={e => this.setState({pointure: e.target.value})}>
                    <option disabled={product.stock37===0}>{"EU 37 : "+product.stock37+" left"}</option>
                    <option disabled={product.stock38===0}>{"EU 38 : "+product.stock38+" left"}</option>
                    <option disabled={product.stock39===0}>{"EU 39 : "+product.stock39+" left"}</option>
                    <option disabled={product.stock40===0}>{"EU 40 : "+product.stock40+" left"}</option>
                    <option disabled={product.stock41===0}>{"EU 41 : "+product.stock41+" left"}</option>
                    <option disabled={product.stock42===0}>{"EU 42 : "+product.stock42+" left"}</option>
                    <option disabled={product.stock43===0}>{"EU 43 : "+product.stock43+" left"}</option>
                    <option disabled={product.stock44===0}>{"EU 44 : "+product.stock44+" left"}</option>
                </Form.Control>
                <Button  variant='dark' onClick={()=>this.props.addArticleToCart(product)}>Add to Cart</Button>
                <p>{product.description}</p>
                <Accordion>
                    <>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h5>Free Delivery and returns</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <p>
                                Free standard shipping with Nike Membership.
                                The delivery will be longer than usual. Check the estimated delivery date during payment.
                                You can return your order for free, for any reason, within 60 days.
                            </p>
                        </Accordion.Collapse>
                    </>
                    <>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <h5>Reviews</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <p>Martine Dubois : Super!</p>    
                        </Accordion.Collapse>
                    </>
                </Accordion>
                <p>
                    This product can be recycled.
                    <a href="#!">Learn More</a>
                </p>
            </Col>
        </Row>
        <FooterPage />
    </div>
  );
}
}
export default ProductPage;