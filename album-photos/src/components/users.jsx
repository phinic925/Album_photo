import React, { useState } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect } from "react";



export default function User() {

    const[data, setData] = useState([]);
    const [albums, setAlbums] = useState([]);
   
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data =>{
        setData(data)
        console.log(data);
      })
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data));
      
    }, []);
    const displayAlbumCount = (userId) => {
      // Filter albums based on userId
      const userAlbums = albums.filter(album => album.userId === userId);
      alert(`User has ${userAlbums.length} albums.`);
    };
   
    
    return(
      <>
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
         <MDBBtn color="info" onClick={() => displayAlbumCount(item.id)}>
               VIEW ALBUM
             </MDBBtn>
            </td>
         
       </tr>
       </>
        )
                
            })}
       
       
      
      </MDBTableBody>
    
    </MDBTable>
    
     </>
    )
    
}