import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 260px;
  height: 100%;
  background-color: pink;
  background-color: var(--bg-secondary);
  z-index: 100;
  border-right: 1px solid var(--border-main);

  @media (max-width: 800px) {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }
`;

MenuWrapper.Logo = styled(Link)`
  display: flex;
  margin: 20px 15px;
  margin-bottom: 30px;
  align-items: center;
  img {
    width: 40px;
    margin-right: 12px;
  }

  h2 {
    color: var(--primary-main);
    font-size: 26px;
    font-weight: 600;
    @media (max-width: 475px) {
      font-size: 18px;
    }
  }
  @media (max-width: 800px) {
    padding: 0;
  }
`;
MenuWrapper.Nav = styled.ul`
  margin-top: 20px;
  @media (max-width: 800px) {
    margin-top: 0;
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    background-color: var(--bg-secondary);
    transition: all 0.25s ease-in-out;
    transform-origin: 0 0;
    transform: ${({ open }) => (open ? 'scaleY(1)' : 'scaleY(0)')};
  }
`;
MenuWrapper.Nav.Item = styled.li`
  width: 100%;
  a {
    width: 100%;
    display: block;
    display: flex;
    align-items: center;
    padding: 15px;
    transition: all 0.25s ease-in-out;
    color: #f5f5f5;
    svg {
      margin-right: 10px;
    }

    span {
      font-size: 14px;
    }
    :hover {
      color: var(--primary-main);
    }
  }

  .active,
  .active:hover {
    background-color: var(--primary-main);
    color: var(--bg-element);
  }
`;

MenuWrapper.SmallMenu = styled.div`
  position: relative;
  button {
    background-color: var(--bg-element);
    padding: 10px;
    display: flex;
    border-radius: 2px;

    svg {
      margin: auto;
      font-size: 20px;
      color: var(--text-main);
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export default MenuWrapper;
