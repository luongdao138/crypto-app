import React from 'react';
import CryptoItemWrapper from './CryptoItem.styles';

const CryptoItem = (props) => {
  const { id, rank, name, iconUrl, price, market_cap, daily_change } = props;
  const { Header, Info } = CryptoItemWrapper;

  return (
    <CryptoItemWrapper to={`/cryptocurrencies/${id}`}>
      <Header>
        <span className='name'>
          {rank}. {name}
        </span>
        <img src={iconUrl} alt='' />
      </Header>
      <Info>
        <ul>
          <li>
            <span className='label'>Price: </span>
            <span className='value'>{price}</span>
          </li>
          <li>
            <span className='label'>Market Cap: </span>
            <span className='value'>{market_cap}</span>
          </li>
          <li>
            <span className='label'>Daily Change: </span>
            <span className='value'>{daily_change}</span>
          </li>
        </ul>
      </Info>
    </CryptoItemWrapper>
  );
};

export default CryptoItem;
