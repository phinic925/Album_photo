import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

const UserInformation = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUserSelect = userId => {
    setSelectedUser(users.find(user => user.id === userId));
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>User Information</h2>
      <MDBTable>
      <MDBTableHead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          </MDBTableHead>
          <MDBTableBody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <MDBBtn color="info" onClick={() => handleUserSelect(user.id)}>
                  View Albums
                </MDBBtn>
              </td>
            </tr>
          ))}
       </MDBTableBody>
      </MDBTable>
      {selectedUser.id && (
        <div>
          <h2>{selectedUser.name}'s Albums</h2>
          <ul>
            {albums.map(album => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserInformation;
