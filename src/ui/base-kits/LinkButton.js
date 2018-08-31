import styled from 'styled-components';
import Link from './Link';

const LinkButton = styled(Link)`
  background: #21AAE2;
  color: #FFFFFF;
  padding: 10px 16px;

  &:visited {
    color: #FFFFFF;
  }

  &:hover {
    background: #3DC3F9;
    color: #FFFFFF;
  }
`;

export default LinkButton;
