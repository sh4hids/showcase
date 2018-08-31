import styled from 'styled-components';

const TitleBig = styled.h1`
  font-family: 'Fira Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  color: ${props => props.color ? props.color : ''};
`;

export default TitleBig;
