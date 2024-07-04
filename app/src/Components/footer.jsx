import React from "react";
import '../css/footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Thanks For visiting our Website!</h5>
            <p>
            Info Covid: Purchases are only made on delivery due to Covid-19 restrictions.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright LM.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;