import React from 'react';
import CardStats from './Cards/CardStats';

export default function AdminHeaderStats({ feedbackObjByCategory }) {
  console.log(feedbackObjByCategory); // Add this line to check the content of feedbackObjByCategory

  return (
    <div className="w-full flex flex-row lg:flex-col gap-5">
      {Object.entries(feedbackObjByCategory).map(([category, feedbackArr], i) => (
        <div key={i} className="w-full">
          <CardStats category={category} stat={feedbackArr} />
        </div>
      ))}
    </div>
  );
}
