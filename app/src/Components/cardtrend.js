import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./Item";
import React from 'react';
import {Card} from 'react-bootstrap';

class Trend extends React.Component {
  render () {
    return (
        <Item className='cee'>
          <Card>
            <Card.Img variant="top" src={this.props.photo} alt='description '/>
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                  {this.props.price}
                </Card.Text>
            </Card.Body>       
          </Card> 
        </Item>  
    );
  }
}

export default Trend;