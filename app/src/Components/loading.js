import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import '../css/loading.css';

class Loading extends React.Component {
  render () {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      );
    }
  }
export default Loading;