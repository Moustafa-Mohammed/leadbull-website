import React from 'react';
import Heading from '@/components/Heading';
import ProgressBar from '@/components/ProgressBar';

const updatesCategory = [
  {
    heading: 'Inbound – Lead Generation',
    body: 'Leads | Location Ontario, Canada - HVAC',
    progress: '40%',
  },
  {
    heading: 'Game-Changing Virtual Deals',
    body: 'Pre Closed | Location Ontario, Canada - HVAC, Solar',
    progress: '50%',
  },
  {
    heading: 'Highest Conversion – Money Making',
    body: 'Hot Leads | Location United States - Solar',
    progress: '60%',
  },
  {
    heading: 'Expanding – New Market',
    body: 'Hot Leads | Location Quebec, Canada - HVAC',
    progress: '70%',
  },
  {
    heading: 'Top Selling – Various Prices',
    body: 'New Tier “A”,”B”,”C” Leads | Location Ontario, Canada - HVAC',
    progress: '80%',
  },
];

const UpdatesCategory = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      {updatesCategory.map((category) => (
        <div key={category.heading} className="flex flex-col gap-1 w-full">
          <Heading level={6} className="font-normal text-start" color="blue">
            {category.heading}
          </Heading>
          <p className="text-lg">{category.body}</p>
          <ProgressBar width={category.progress} />
        </div>
      ))}
    </div>
  );
};

export default UpdatesCategory;
