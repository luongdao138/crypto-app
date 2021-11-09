import styled from 'styled-components';

const Wrapper = styled.div``;

Wrapper.Input = styled.input`
  width: 475px;
  margin-bottom: 30px;
  padding: 10px 20px;
  border: 1px solid var(--border-main);
  background-color: var(--bg-element);
  color: var(--text-main);
  border-radius: 4px;
  ::placeholder {
    color: var(--text-elight);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
Wrapper.List = styled.div`
  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    gap: 20px;
  }
`;

export default Wrapper;
