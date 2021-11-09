import styled from 'styled-components';

const ExchangeItemWrapper = styled.div`
  background-color: var(--bg-element);
  .ReactCollapse--collapse {
    transition: all 0.2s ease-in-out;
  }
`;
ExchangeItemWrapper.Meta = styled.div`
  cursor: pointer;
  padding: 15px;
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr;
  border-bottom: 1px solid var(--border-main);
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  .group {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--text-main);
    img.icon {
      width: 32px;
      margin: 0 8px;
    }
    .rank,
    .name {
      font-weight: 500;
    }
    @media (max-width: 800px) {
      font-size: 12px;
    }
    &.small {
      @media (max-width: 500px) {
        display: none;
      }
    }
  }
`;
ExchangeItemWrapper.Description = styled.div`
  padding: 15px;
  color: var(--text-main);
  font-size: 14px;
  line-height: 26px;
  border-bottom: 1px solid var(--border-main);
  transition: all 0.25s ease-in-out;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
ExchangeItemWrapper.SmallMeta = styled.div`
  padding: ${({ isBorder }) => (isBorder ? '15px' : '15px 15px 0 15px')};
  color: var(--text-main);
  font-size: 12px;
  line-height: 26px;
  transition: all 0.25s ease-in-out;
  border-bottom: ${({ isBorder }) =>
    isBorder ? '1px solid var(--border-main)' : 'none'};
  .label {
    font-weight: 500;
    margin-right: 5px;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;
export default ExchangeItemWrapper;
