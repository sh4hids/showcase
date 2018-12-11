import styled from 'styled-components';
import Link from './Link';

const LinkButton = styled(Link)`
  background: #21aae2;
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 4px;

  &:visited {
    color: #ffffff;
  }

  &:hover {
    background: #3dc3f9;
    color: #ffffff;
  }
`;

export default LinkButton;
