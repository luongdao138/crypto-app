import styled from 'styled-components';

const NewsItemWrapper = styled.a`
  background-color: var(--bg-element);
  padding: 15px;
  border-radius: 4px;
  transition: all 0.25s ease-in-out;
  border: 1px solid var(--border-main);
  :hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
  }
`;
NewsItemWrapper.Header = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  p {
    color: var(--text-main);
    font-weight: 500;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;

    @media (max-width: 475px) {
      font-size: 16px;
    }
  }

  img {
    /* width: 40px; */
  }
`;
NewsItemWrapper.Description = styled.div`
  color: var(--text-main);
  opacity: 0.9;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
  line-height: 22px;
  margin-bottom: 15px;
  @media (max-width: 475px) {
    font-size: 12px;
  }
`;
NewsItemWrapper.Provider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-main);
  opacity: 0.9;
  font-size: 12px;

  .left {
    display: flex;
    align-items: center;
    margin-right: 10px;
    img {
      width: 32px;
      height: 32px;
      object-fit: contain;
      margin-right: 8px;
      border-radius: 50%;
    }
  }

  .right {
    font-size: 10px;
  }
`;
export default NewsItemWrapper;
