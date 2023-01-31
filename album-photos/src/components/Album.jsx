import React,{useState,useEffect} from "react";
import axios from 'axios';
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
    const[albums, setAlbums] = useState([]);
    const[selectedAlbum, setSelectedAlbums] = useState({});
     const[photos, setPhotos] = useState([]);
   
    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
          setAlbums(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    const handleUserSelect = albumId => {
      setSelectedAlbums(albums.find(album => album.id === albumId));
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?AlbumId=${albumId}`)
        .then(response => {
          setPhotos(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
     
        
  return (
    <>
    <MDBRow className="row-cols-1 row-cols-md-3 g-4 mt-4">
      
       
         {albums.map((item)=>{
            return(
                <>
                
                  <MDBCol>
              <MDBCard className="h-100">  
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBBtn color="info" onClick={() => handleUserSelect(item.id)}>View</MDBBtn>
          </MDBCardFooter>
          </MDBCard>
          </MDBCol>
                </>
    
        )
        })}
        
        
     
    </MDBRow>
     {selectedAlbum.id && (
      <div>
        <h2>{selectedAlbum.title}'s Albums</h2>
        <ul>
          {photos.map(photo => (
            <li key={photo.id}>{photo.title}</li>
          ))}
        </ul>
      </div>
    )}
    </>
  );
}