import React from 'react';
import NewsItemWrapper from './NewsItem.styles';

const NewsItem = (props) => {
  const { description, name, provider_url, provider_name, url, published_at } =
    props;
  const { Header, Description, Provider } = NewsItemWrapper;

  return (
    <NewsItemWrapper href={`${url}`} target='_blank'>
      <Header>
        <p className='name'>{name}</p>
      </Header>
      <Description>{description}</Description>
      <Provider>
        <div className='left'>
          <img src={provider_url} alt='' />
          <span>{provider_name}</span>
        </div>
        <span className='right'>{published_at}</span>
      </Provider>
    </NewsItemWrapper>
  );
};

export default NewsItem;
