import styled from 'styled-components';

const CoinDetailWrapper = styled.div`
  .divider {
    background-color: var(--border-main);
    width: 100%;
    height: 1px;
    margin: 30px 0;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-main);
    margin-bottom: 10px;
  }
`;
CoinDetailWrapper.Header = styled.div`
  text-align: center;

  .main-title {
    font-weight: 700;
    font-size: 24px;
    color: var(--primary-main);
    margin-bottom: 10px;
  }

  .sub-title {
    color: var(--text-main);
    font-size: 16px;
  }
`;
CoinDetailWrapper.Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;
CoinDetailWrapper.Description = styled.div`
  font-size: 14px;
  color: var(--text-main);
  line-height: 26px;
  h3 {
    margin-top: 10px;
  }
`;
CoinDetailWrapper.Links = styled.div`
  li {
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-main);
    transition: all 0.25s ease-in-out;
    :hover {
      background-color: var(--bg-element);
    }

    .type {
      font-weight: 600;
      color: var(--text-main);
      text-transform: capitalize;
    }

    .url {
      color: var(--primary-main);
      font-weight: 600;
    }
  }
`;

export default CoinDetailWrapper;
