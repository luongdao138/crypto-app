import React from 'react';
import DetailInfoWrapper from './DetailInfo.styles';

const DetailInfo = ({ title, subTitle, options }) => {
  const { Header, List } = DetailInfoWrapper;
  return (
    <DetailInfoWrapper>
      <Header>
        <p className='main-title'>{title}</p>
        <p className='sub-title'>{subTitle}</p>
      </Header>
      <List>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <span className='label'>
                {option.icon}
                <span>{option.label}</span>
              </span>
              <span className='value'>{option.value}</span>
            </li>
          ))}
        </ul>
      </List>
    </DetailInfoWrapper>
  );
};

export default DetailInfo;
