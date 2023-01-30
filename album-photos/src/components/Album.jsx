import React,{useState,useEffect} from "react";
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
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())

        .then(data =>{
            setData(data)
            console.log(data)

        });
      
    }, [])
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      
       
         {data.map((item)=>{
            return(
                <>
                  <MDBCol>
              <MDBCard className="h-100">  
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBBtn color="info">View</MDBBtn>
          </MDBCardFooter>
          </MDBCard>
          </MDBCol>
                </>
    
    )
        })}
    </MDBRow>
  );
}