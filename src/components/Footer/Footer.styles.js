import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: var(--bg-secondary);
  padding: 20px 0;
`;

FooterWrapper.Title = styled.h3`
  color: #f5f5f5;
  font-weight: 500;
  text-align: center;
  font-size: 16px;

  a {
    color: var(--primary-main);
    margin-left: 4px;
  }
  margin-bottom: 10px;

  @media (max-width: 475px) {
    font-size: 12px;
  }
`;
FooterWrapper.Menu = styled.ul`
  display: flex;
  justify-content: center;
  li {
    margin: 0 5px;
    font-size: 14px;
    a {
      color: var(--primary-main);
    }
    @media (max-width: 475px) {
      font-size: 10px;
    }
  }
`;

export default FooterWrapper;
