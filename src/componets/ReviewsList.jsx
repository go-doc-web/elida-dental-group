import React from 'react';
import Rating from './ui/Rating/Rating';

import formattedDate from '@/lib/formattedDate';
const getReviews = async () => {
  try {
    const res = await fetch(`${process.env.API_HOST}/reviews`);
    //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const ReviewsList = async () => {
  const data = await getReviews();

  return (
    <ul className="">
      {data.map(({ _id: id, body, userName, secondName, rating, createdAt }) => {
        return (
          <li className="mb-3 border p-3  bg-[#d6e1e7] " key={id}>
            <h2 className="text-2xl text-[#1386C7] font-bold mb-1.5">{`${userName} ${secondName ? secondName : ''}`}</h2>
            <p className="text-blue-500  text-sm font-normal tracking-tight capitalize mb-3">
              {formattedDate(createdAt)}
            </p>
            <Rating value={rating} />
            <p className="text-black-70  text-base font-normal leading-[18px] tracking-[0.14px] mt-4">{`"${body}"`}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
