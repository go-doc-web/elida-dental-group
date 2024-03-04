import React from 'react';
import ReviewsList from '@/componets/ReviewsList';
export const revalidate = 10;

const Dashboard = () => {
  return (
    <>
      <div className="w-2/3 mx-auto bg-slate-500 p-5 text-center text-3xl font-semibold text-amber-400">
        {' '}
        <h2> Dashboard</h2>
      </div>
      <div className="w-2/3 mx-auto mt-2 ">
        <h3>Reviews</h3>
        <ReviewsList />
      </div>
    </>
  );
};

export default Dashboard;
