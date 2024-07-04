import '../css/toaster.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Toast} from 'react-bootstrap';


class Toaster extends React.Component {
  render () {
      return (
        <div className="Toasty">
            <Toast onClose={this.props.hideToast}>
                <Toast.Header>
                    <strong className="mr-auto">{this.props.message}</strong>
                </Toast.Header>
            </Toast>
        </div>
      );
    }
}
export default Toaster;