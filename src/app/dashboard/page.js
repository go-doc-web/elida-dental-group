import React from 'react';
import ReviewsList from '@/componets/ReviewsList';
export const revalidate = 10;

const Dashboard = () => {
  return (
    <>
      <div className="w-2/3 mx-auto bg-[#1386C7] p-4 text-center text-3xl font-semibold text-amber-400">
        {' '}
        <h2> Dashboard</h2>
      </div>
      <div className="w-2/3 mx-auto mt-4 ">
        <h3 className="font-bold text-[#1386C7] text-2xl mb-4">Reviews</h3>
        <ReviewsList />
      </div>
    </>
  );
};

export default Dashboard;
