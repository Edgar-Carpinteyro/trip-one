import React, { useEffect, useState } from "react";
import { Table, Button } from 'semantic-ui-react'
import './International.css'
import axios from "axios";


export default function InternationalRating() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://63856416beaa6458265e9646.mockapi.io/worldrating/`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  // const setData = (data) => {
  //   let { id, name, destination, starRating, review } = data;
  //   localStorage.setItem("ID", id);
  //   localStorage.setItem("Name", name);
  //   localStorage.setItem("Destination", destination);
  //   localStorage.setItem("Start Rating", starRating);
  //   localStorage.setItem("Review", review);
  // };
  
  const getData = () => {
    axios.get(`https://63856416beaa6458265e9646.mockapi.io/worldrating/`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios.delete(`https://63856416beaa6458265e9646.mockapi.io/worldrating/${id}`)
    .then(() => {
        getData();
    })
  };

  return (
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Destination</Table.HeaderCell>
            <Table.HeaderCell>Stars</Table.HeaderCell>
            <Table.HeaderCell>Destination Review</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
            <Table.Row key={data.id}>
              <Table.Cell >{data.name}</Table.Cell>
              <Table.Cell >{data.destination}</Table.Cell>
              <Table.Cell >{data.starRating}</Table.Cell>
              <Table.Cell >{data.review}</Table.Cell>
              <Table.Cell>
                <Button color="pink" onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          );
          })}     
        </ Table.Body> 
      </Table>
  )    
}