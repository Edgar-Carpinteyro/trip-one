import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Reads() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://63856416beaa6458265e9646.mockapi.io/traveler`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  
  const setData = (data) => {
    let { id, firstName, lastName, desiredDestination } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Destination of Travel", desiredDestination);
  };

  const getData = () => {
    axios.get(`https://63856416beaa6458265e9646.mockapi.io/traveler`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios.delete(`https://63856416beaa6458265e9646.mockapi.io/traveler/${id}`)
    .then(() => {
        getData();
    })
  };

  return (
    <div className="main">
      <h1 className="main-header">Customer List</h1>
          <h2>Update and delete customers as needed.</h2>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Destination of Travel</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.desiredDestination}</Table.Cell>
                <Table.Cell>
                    <Link to=" /Updates">
                      <Button color= "teal" type="button" onClick={(updateAPIData) => setData(data)}> Update</Button>
                    </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color= "pink" onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  );
}