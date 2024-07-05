'use client';

import { useEffect, useState } from 'react';

import EarningCard from 'components/dashboard/Default/EarningCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (

    <EarningCard isLoading={isLoading}></EarningCard>

  );

};

export default Dashboard;
