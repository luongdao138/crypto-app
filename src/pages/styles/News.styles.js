import styled from 'styled-components';

const NewsWrapper = styled.div``;
NewsWrapper.List = styled.div`
  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
`;
export default NewsWrapper;
