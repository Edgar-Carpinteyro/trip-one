import React, { useState} from 'react';
import { AiOutlineStar } from 'react-icons/ai';

function StarRating() {

    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);


  return (
    <div>
        {[...Array(5)].map((star, i) => {
            const starRating = i + 1;
            return (
                <label key={starRating}>
                    <input
                        type='radio' 
                        name='rating' 
                        value={starRating} 
                        onClick={() => setRating(starRating)}
                    />
                    <AiOutlineStar
                        
                        className='star' 
                        color={starRating <= (hover || rating)  ? '#d90429' : '#03045e'}
                        size='25'
                        onMouseEnter={() => setHover(starRating)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            )
        })}
        <span id='star'>{rating}</span>
    </div>
  )
}

export default StarRating