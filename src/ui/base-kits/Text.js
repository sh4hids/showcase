import styled from 'styled-components';

const Text = styled.p`
  margin: ${props => props.margin ? props.margin : '0'};
  padding: 0;
  line-height: 1.428;
  color: ${props => props.color ? props.color : ''};
`;

export default Text;
