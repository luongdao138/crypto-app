import styled from 'styled-components';

const StatItemWrapper = styled.div`
  background-color: var(--bg-element);
  padding: 15px;
  border-radius: 4px;
  transition: all 0.25s ease-in-out;
  border: 1px solid var(--border-main);

  .label {
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 6px;
  }

  .value {
    font-size: 18px;
    color: var(--text-main);
    font-weight: 500;
  }

  :hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
  }
`;

export default StatItemWrapper;
