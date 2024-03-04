import React from 'react';
import Rating from './ui/Rating/Rating';

import formattedDate from '@/lib/formattedDate';

const getReviews = async () => {
  const res = await fetch('http://localhost:3000/api/reviews');
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
const ReviewsList = async () => {
  const data = await getReviews();

  return (
    <ul className={'bg-slate-300'}>
      {data.map(({ id, body, userName, secondName, rating, createdAt }) => {
        return (
          <li className="border p-3" key={id}>
            <h2 className="text-2xl">{`${userName} ${secondName ? secondName : ''}`}</h2>
            <p>{formattedDate(createdAt)}</p>
            <Rating value={rating} />
            <p>{`"${body}"`}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
