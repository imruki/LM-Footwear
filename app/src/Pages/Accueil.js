import Menu from '../Components/navbar.js';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-elastic-carousel";
import {Button, Row, Col} from 'react-bootstrap';
import Trend from '../Components/cardtrend.js';
import React from 'react';
import Loading from '../Components/loading.js';
import {Link} from 'react-router-dom';
import FooterPage from '../Components/footer.jsx';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class Accueil extends React.Component {
  render(){
    if(this.props.loading){
      return <Loading />
    }
    const newArray = this.props.products.filter(prd => prd.trend===1);

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
        <div className="Container">
            <div className="nouveauté">
              <img src='./HeaderWallpaper.jpg' alt="logo" />
              <div className="cont">
                <Link to={"/ProductPage/"+13}  >
                  <Button variant="outline-light">Check this product</Button>
                </Link>
              </div>
           </div>
          <div className='Catégorie'>
            <Row>
              <Col lg={4}> 
                <Link to="/Products" onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Men"]);this.props.ChangeCategory(["Football","Basketball","Running","Lifestyle"]);}}>
                  <h2>Men</h2>
                  <img src='./cathomme.png' alt='description '></img>
                </Link>
              </Col>
              <Col lg={4}>
                <Link to="/Products" onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Women"]);this.props.ChangeCategory(["Football","Basketball","Running","Lifestyle"]);}}> 
                  <h2>Women</h2>
                  <img src='./catfemme.jpg' alt='description '></img>
                </Link>
              </Col>
              <Col lg={4}>
                <Link to="/Products" onClick={() => {this.props.ChangePriceRange(0,1000);this.props.ChangeGender(["Boys","Girls"]);this.props.ChangeCategory(["Football","Basketball","Running","Lifestyle"]);}}>
                  <h2>Kids</h2>
                  <img src='./catenfant.jpg' alt='description '></img>
                </Link>
              </Col>
            </Row>
          </div>
        
          <div className='Trend'>
            <h2>Trends of the moment</h2>
            <Carousel breakPoints={breakPoints}>
                  {newArray.map((u,key)=>
                  <Link to={"/ProductPage/"+u.id}  >
                  <Trend price={u.price+" $"} name={u.name} photo={'http://localhost:1337' +u.img[0].url}/></Link>)}
            </Carousel>
          </div>
        </div>
        <FooterPage />
      </div>
  );
  }

}

export default Accueil;