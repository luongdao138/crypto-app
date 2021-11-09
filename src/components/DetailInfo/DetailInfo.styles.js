import styled from 'styled-components';

const DetailInfoWrapper = styled.div``;
DetailInfoWrapper.Header = styled.div`
  margin-bottom: 10px;
  .main-title {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-main);
    margin-bottom: 5px;
  }

  .sub-title {
    font-size: 14px;
    color: var(--text-main);
    line-height: 26px;
  }
`;
DetailInfoWrapper.List = styled.div`
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

    .label {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: var(--text-main);
      svg {
        font-size: 20px;
        margin-right: 5px;
      }
    }
    .value {
      color: var(--text-main);
      font-weight: 600;
    }
  }
`;
export default DetailInfoWrapper;
