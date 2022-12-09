import React, { useState } from 'react';
import './Domestic.css'
import { Form, Button } from 'semantic-ui-react'
import DomesticRating from './DomesticRating'
import StarRating from './Star'
import axios from 'axios';

export default function Domestic () {

  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  // const [starRating, setStarRating] = useState(null);
  const [review, setReview] = useState('')
  const postData = () => {
    axios.post(`https://63856416beaa6458265e9646.mockapi.io/rating/`, {
        name,
        destination,
        starRating: `${document.getElementById('star').innerHTML} star`,
        review
    })
  }

  return(
    <div>
    <h1>Domestic Travels</h1>
    <Form>
    <Form.Group>
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Place of Destination</label>
        <input placeholder="Destination" onChange={(e) => setDestination(e.target.value)}/>
      </Form.Field>
      <Form.Field
        id='form-input-control-last-name'
        control={StarRating}
        label='Star Rating'
      />
    </Form.Group>
    <Form.Field>
        <label>Leave a Review</label>
        <input placeholder="Write a brief overview about your experience in this place." onChange={(e) => setReview(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Button color="green" onClick={postData} type="submit">Submit</Button>
    </Form.Field>
   
  </Form>

  <DomesticRating />
  </div>
  );
}

