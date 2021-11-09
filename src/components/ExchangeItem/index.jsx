import { useState } from 'react';
import ExchangeItemWrapper from './ExchangeItem.styles';
import HTMLReactParser from 'html-react-parser';
import Collapse from 'react-collapse';

const ExchangeItem = ({
  rank,
  name,
  iconUrl,
  volume,
  market_share,
  number_of_markets,
  description,
}) => {
  const { Meta, Description, SmallMeta } = ExchangeItemWrapper;
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <ExchangeItemWrapper>
      <Meta onClick={() => setOpenDescription(!openDescription)}>
        <div className='group'>
          <span className='rank'>{rank}. </span>
          <img className='icon' src={iconUrl} alt='' />
          <span className='name'>{name}</span>
        </div>
        <div className='group small'>
          <span className='value'>{volume}</span>
        </div>
        <div className='group small'>
          <span className='value'>{number_of_markets}</span>
        </div>
        <div className='group small'>
          <span className='value'>{market_share}</span>
        </div>
      </Meta>
      <Collapse isOpened={openDescription}>
        <SmallMeta isBorder={!description}>
          <ul>
            <li>
              <span className='label'>24h Trade Volume:</span>
              <span className='value'>{volume}</span>
            </li>
            <li>
              <span className='label'>Markets:</span>
              <span className='value'>{number_of_markets}</span>
            </li>
            <li>
              <span className='label'>Changes:</span>
              <span className='value'>{market_share}</span>
            </li>
          </ul>
        </SmallMeta>
        {description && (
          <Description>{HTMLReactParser(description || '')}</Description>
        )}
      </Collapse>
    </ExchangeItemWrapper>
  );
};

export default ExchangeItem;
