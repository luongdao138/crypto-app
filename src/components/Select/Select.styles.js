import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  width: 300px;
  margin-bottom: 20px;
  .select {
    color: var(--text-main);
    background-color: var(--bg-element);
    padding: 10px 15px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid var(--border-main);
    font-size: 14px;
    svg {
      font-size: 20px;
    }
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

SelectWrapper.Dropdown = styled.div`
  position: absolute;
  color: var(--text-main);
  background-color: var(--bg-element);
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
  left: 0;
  right: 0;
  transition: all 0.2s ease-in-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transform: ${({ open }) =>
    open ? 'translateY(5px) scale(1)' : 'translateY(5px) scale(0.6)'};

  li {
    padding: 10px 10px 10px 0;
    transition: all 0.2s ease-in-out;

    :hover {
      background-color: var(--bg-main);
      padding-left: 15px;
    }
    border-radius: 4px;
    margin-bottom: 5px;
    cursor: pointer;

    :last-child {
      margin-bottom: 0;
    }

    &.active {
      background-color: var(--bg-main);
      padding-left: 15px;
    }
  }
`;

export default SelectWrapper;
