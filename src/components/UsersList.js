import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";

const UsersList = (props) => {
  const url = "https://625bca1850128c5702076f16.mockapi.io/users/users/";
  const [usersData, setUsersData] = useState([]);

  const getUserList = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsersData(data));
  };

  useEffect(() => {
    getUserList();
  }, []);

  const deleteHandler = (id) => {
    console.log(id);
    fetch(url + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => {
        getUserList();
        alert("Deleted Successfully");
      });
  };

  return (
    <div>
      <Button className='home-btn' onClick={() => props.history.push("/")}>
        Home
      </Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.emailId}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.age}</td>
                <td>
                  <Button
                    onClick={() => {
                      props.history.push(`/form/${user.id}`);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button color='danger' onClick={() => deleteHandler(user.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
