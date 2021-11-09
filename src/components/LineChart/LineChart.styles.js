import styled from 'styled-components';

const LineChartWrapper = styled.div``;
LineChartWrapper.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  .main-title {
    font-weight: 700;
    font-size: 24px;
    color: var(--primary-main);
    margin-right: 20px;
  }

  .info {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-main);
    span {
      margin-left: 15px;
    }
  }
`;

export default LineChartWrapper;
