import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  .main {
    margin-left: 260px;
    background-color: var(--bg-main);
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;

    .content {
      padding: 25px 15px;
      @media (max-width: 800px) {
        margin-top: 90px;
      }
    }

    @media (max-width: 800px) {
      margin-left: 0;
    }
  }
`;

LayoutWrapper.ThemeSwitch = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--text-main);
  font-size: 25px;
  cursor: pointer;
`;

export default LayoutWrapper;
