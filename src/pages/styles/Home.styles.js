import styled from 'styled-components';

const HomeWrapper = styled.div``;
HomeWrapper.Group = styled.div`
  margin-bottom: 30px;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: var(--primary-main);
      font-weight: 500;
      span {
        margin-right: 5px;
      }
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
    @media (max-width: 475px) {
      flex-direction: column;
      h2 {
        font-size: 16px;
        margin-bottom: 5px;
      }
    }
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 475px) {
      grid-template-columns: 1fr;
    }
  }

  .cryptos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    gap: 20px;
  }

  .news {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
`;
HomeWrapper.Title = styled.h2`
  color: var(--text-main);
  font-weight: 600;
  font-size: 25px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
HomeWrapper.LoaderWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export default HomeWrapper;
