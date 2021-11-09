import React from 'react';
import StatItemWrapper from './StatItem.styles';

const StatItem = ({ label, value }) => {
  return (
    <StatItemWrapper>
      <p className='label'>{label}</p>
      <p className='value'>{value}</p>
    </StatItemWrapper>
  );
};

export default StatItem;
