import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css'
import Nav from 'react-bootstrap/Nav';
import { Button,Form,FormControl,NavDropdown, Navbar, Row , Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
        searchvalue:""

    }
}
  render(){
  return (
    <div>
      <Navbar className='textnav' bg="white" expand="lg">
        <Link to="/">LM Footwear </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Men" id="basic-nav-dropdown">
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Men"]);this.props.ChangeCategory(["Lifestyle"]);}}>Lifestyle</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Men"]);this.props.ChangeCategory(["Running"]);}}>Running</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Men"]);this.props.ChangeCategory(["Basketball"]);}}>Basketball</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Men"]);this.props.ChangeCategory(["Football"]);}}>Football</Link>
              <NavDropdown.Divider />
              <Link to="/Products" onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Men"]);this.props.ChangeCategory(["Football","Basketball","Running","Lifestyle","Mercurial"]);}}>All</Link>
            </NavDropdown>
            <NavDropdown title="Women" id="basic-nav-dropdown">
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Women"]);this.props.ChangeCategory(["Lifestyle"]);}}>Lifestyle</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Women"]);this.props.ChangeCategory(["Running"]);}}>Running</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Women"]);this.props.ChangeCategory(["Basketball"]);}}>Basketball</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Women"]);this.props.ChangeCategory(["Football"]);}}>Football</Link>
              <NavDropdown.Divider />
              <Link to="/Products" onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Women"]);this.props.ChangeCategory(["Football","Basketball","Running","Lifestyle","Mercurial"]);}}>All</Link>
            </NavDropdown>
            <NavDropdown title="Boys" id="basic-nav-dropdown">
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Boys"]);this.props.ChangeCategory(["Lifestyle"]);}}>Lifestyle</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Boys"]);this.props.ChangeCategory(["Running"]);}}>Running</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Boys"]);this.props.ChangeCategory(["Basketball"]);}}>Basketball</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Boys"]);this.props.ChangeCategory(["Football"]);}}>Football</Link>
              <NavDropdown.Divider />
              <Link to="/Products" onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Girls"]);this.props.ChangeCategory(["Football","Basketball","Running","Lifestyle","Mercurial"]);}}>All</Link>
            </NavDropdown>
            <NavDropdown title="Girls" id="basic-nav-dropdown">
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Girls"]);this.props.ChangeCategory(["Lifestyle"]);}}>Lifestyle</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Girls"]);this.props.ChangeCategory(["Running"]);}}>Running</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Girls"]);this.props.ChangeCategory(["Basketball"]);}}>Basketball</Link>
              <Link to="/Products"  onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Girls"]);this.props.ChangeCategory(["Football"]);}}>Football</Link>
              <NavDropdown.Divider />
              <Link to="/Products" onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Girls"]);this.props.ChangeCategory(["Football","Basketball","Running","Lifestyle","Mercurial"]);}}>All</Link>
            </NavDropdown>
          </Nav>
          
          <Form inline>
          <Button variant="light"><Link to="/Cart">{this.props.cart.length}<Icon.Bag /></Link></Button>
          <FormControl type="text" placeholder="Search" className="mr-sm-2"  value={this.state.searchvalue} onChange={e => this.setState({searchvalue: e.target.value})}/>
          <Button variant="light" ><Link to="/Products"  onClick={() => {this.props.SearchProduct(this.state.searchvalue);this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Boys","Girls","Men","Women"]);this.props.ChangeCategory(["Football","Basketball","Running","Lifestyle","Mercurial"]);}}><Icon.Search /></Link></Button>
          
          </Form>
          <Link to="/Admin">Admin Panel</Link>
          
        </Navbar.Collapse>
      </Navbar>
      <div className='Covid color'>
        <p>Info Covid: Purchases are only made on delivery due to Covid-19 restrictions.</p>
      </div>

    </div>
  );
}
}



export default Menu;