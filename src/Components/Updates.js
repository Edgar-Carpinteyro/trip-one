import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


export default function Updates() {

  const navigate = useNavigate();

  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [desiredDestination, setDesiredDestination] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setDesiredDestination(localStorage.getItem("Desired Destination"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://63856416beaa6458265e9646.mockapi.io/traveler/${id}`, {
        firstName,
        lastName,
        desiredDestination,
      })
      navigate('/Reads');
  };

  

  return (
    <div className="main">
          <h1 className="main-header">Update Customer Information</h1>
          <h2>Click "Update" after making corrections on customer's data.</h2>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Destination of Travel</label>
          <input
            placeholder="Destination"
            value={desiredDestination}
            onChange={(e) => setDesiredDestination(e.target.value)}
          />
        </Form.Field>
        <Button color="teal" type="button" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}