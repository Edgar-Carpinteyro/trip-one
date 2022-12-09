import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Creates() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [desiredDestination, setDesiredDestination] = useState("");
  const postData = () => {
    axios.post(`https://63856416beaa6458265e9646.mockapi.io/traveler/`, {
        firstName,
        lastName,
        desiredDestination,
    }) 
    navigate('/Reads');
  }
  return (
    <div className="main">
          <h1 className="main-header">Welcome!</h1>
          <h2>Please enter the customers information.</h2>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Desired Destination of Travel</label>
          <input placeholder="Destination" onChange={(e) => setDesiredDestination(e.target.value)}/>
        </Form.Field>
            <Button color='purple' onClick={postData} type="button">Submit</Button>
      </Form>
    </div>
  );
}