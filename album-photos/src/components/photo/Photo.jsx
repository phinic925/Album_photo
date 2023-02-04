import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";


const Photo = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, []);

  const handleTitleEdit = (id, newTitle) => {
    const updatedPhotos = photos.map(photo => {
      if (photo.id === id) {
        return { ...photo, title: newTitle };
      }
      return photo;
    });

    setPhotos(updatedPhotos);

    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        
      },
      body: JSON.stringify({ title: newTitle }),
    })
    .then((response) => response.json())
    .then((data) => setPhotos(data));
        
  };

  return (
 
    <MDBRow className="row-cols-1 row-cols-md-3 g-4 mt-4">
      
       
    {photos.map((item)=>{
       return(
           <>
           
             <MDBCol key={item.id}>
         <MDBCard className="h-100">
         <MDBCardBody>
         <MDBCardImage
                src={item.url}
                alt={item.title}
                className="rounded-start w-100"
              />
     </MDBCardBody>  
     <MDBCardBody>
       <MDBCardTitle>{item.title}</MDBCardTitle>
     </MDBCardBody>
     <MDBCardBody>
     <input
          className="bttn"
            type="text"
            defaultValue={item.title}
            onBlur={event => handleTitleEdit(item.id, event.target.value)}
          />
     </MDBCardBody>
    
     </MDBCard>
     </MDBCol>
           </>

   )
   })}
   
   

</MDBRow> 
 
   
      
  )
}
export default Photo;
