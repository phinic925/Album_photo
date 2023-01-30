import React, { useState,useParams } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect } from "react";

export default function User() {
    // const {id} = useParams();
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())

        .then(data =>{
            setData(data)
            console.log(data)

        });
      
    }, [])
    return(
        <MDBTable align='middle' className="table">
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Username</th>
          <th scope='col'>Email</th>
         
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {data.map((item) =>{
        return(
            <>
         <tr key={item.id}>
         <td>
          {item.name}
         </td>
         <td>
       {item.username}
        
         </td>
         
         <td>{item.email}</td>
         <td>
           <MDBBtn color='link' rounded size='sm'>
             VIEW
           </MDBBtn>
         </td>
       </tr>
       </>
        )
                
            })}
       
       
      
      </MDBTableBody>
    </MDBTable>
    )
    
}