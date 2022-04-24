import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const UserForm = (props) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    username: "",
    emailId: "",
    mobileNumber: "",
    age: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { username, emailId, mobileNumber, age } = formData;

  useEffect(() => {
    console.log("useeffect");
    console.log(id);
    if (id) {
      fetch("https://625bca1850128c5702076f16.mockapi.io/users/users/" + id)
        .then((data) => data.json())
        .then((data) => setFormData(data));
    }
    console.log(formData);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      fetch("https://625bca1850128c5702076f16.mockapi.io/users/users/" + id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((data) => data.json())
        .then((data) => {
          alert("Data Updated Successfully");
          props.history.push("/");
        })
        .catch((err) => console.log(err));
    } else {
      fetch("https://625bca1850128c5702076f16.mockapi.io/users/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((data) => data.json)
        .then((data) => {
          alert("Data saved Successfully");
          props.history.push("/");
        })
        .catch((err) => console.log(err));
    }

    setFormData({
      username: "",
      emailId: "",
      mobileNumber: "",
      age: "",
    });
  };
  return (
    <div>
      <h1>{id ? "Edit User" : "Add User"}</h1>
      <Form className='userForm' onSubmit={submitHandler}>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input
            type='text'
            value={username}
            name='username'
            id='username'
            onChange={changeHandler}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            type='email'
            value={emailId}
            name='emailId'
            id='email'
            onChange={changeHandler}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='mobile'>Mobile Number </Label>
          <Input
            type='tel'
            value={mobileNumber}
            name='mobileNumber'
            id='mobile'
            onChange={changeHandler}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='age'>Age</Label>
          <Input
            type='number'
            value={age}
            name='age'
            id='age'
            onChange={changeHandler}
            required
          />
        </FormGroup>
        <Button className='submit-btn' type='Submit'>
          Submit
        </Button>
        <Button
          type='button'
          color='danger'
          onClick={() => props.history.push("/")}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
