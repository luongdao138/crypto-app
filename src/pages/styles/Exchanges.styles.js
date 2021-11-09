import styled from 'styled-components';

const ExchangesWrapper = styled.div``;
ExchangesWrapper.Header = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr;
  font-size: 14px;
  color: var(--text-main);
  margin-bottom: 10px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
ExchangesWrapper.List = styled.div`
  border: 1px solid var(--border-main);
`;
ExchangesWrapper.Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  ul {
    display: flex;
    align-items: center;
  }
  li.item {
    border: 1px solid var(--border-main);
    margin: 0 2px;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--bg-element);
    svg {
      font-size: 20px;
    }

    a {
      display: block;
      font-size: 12px;
      color: var(--text-main);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateX(-1px);
    }
    &.selected {
      background-color: var(--border-active);
      a {
        color: var(--primary-main);
      }
    }

    &.disabled {
      a {
        cursor: default;
      }
      svg {
        opacity: 0.4;
      }
    }

    @media (max-width: 500px) {
      width: 24px;
      height: 24px;
      svg {
        font-size: 16px;
      }
      a {
        width: 24px;
        height: 24px;
        font-size: 10px;
      }
    }
  }

  li.break {
    color: var(--text-main);
    display: flex;
    align-items: center;
    height: 32px;
    margin: 0 10px;
  }
`;
export default ExchangesWrapper;
