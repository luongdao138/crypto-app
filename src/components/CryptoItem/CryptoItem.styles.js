import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CryptoItemWrapper = styled(Link)`
  background-color: var(--bg-element);
  /* padding: 15px; */
  border-radius: 4px;
  transition: all 0.25s ease-in-out;
  border: 1px solid var(--border-main);

  :hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
  }
`;
CryptoItemWrapper.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  color: var(--text-main);
  border-bottom: 1px solid var(--border-main);
  span {
    font-weight: 500;
  }
  img {
    width: 32px;
  }
`;
CryptoItemWrapper.Info = styled.div`
  padding: 25px 15px;

  li {
    margin-bottom: 15px;
    color: var(--text-main);
    opacity: 0.9;
    font-size: 14px;
    .label {
      margin-right: 2px;
    }
    .value {
    }

    :last-child {
      margin: 0;
    }
  }
`;
export default CryptoItemWrapper;
