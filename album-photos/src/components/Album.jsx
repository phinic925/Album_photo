import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Album() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Album title</MDBCardTitle>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBBtn color="info">View</MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Album title</MDBCardTitle>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBBtn color="info">View</MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Album title</MDBCardTitle>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBBtn color="info">View</MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}