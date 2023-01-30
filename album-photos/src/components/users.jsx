import React, { useState } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect } from "react";
// import { useParams } from "react-router-dom";

export default function User() {
//    const {id} = useParams;
    const[data, setData] = useState([]);
    const[album, setAlbum] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())

        .then(data =>{
            setData(data)
               setIsLoading(false)
            console.log(data)

        });
      
    }, [])
    // const fetchData = () => {
    //     fetch("https://jsonplaceholder.typicode.com/albums")
    //       .then(response => {
    //         return response.json()
    //       })
    //       .then(data => {
    //         setAlbum(data)
    //       })
    //   }
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
      {isLoading && <p>Loading...</p>}
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
             VIEW AlBUMS
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