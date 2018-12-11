import styled, { css } from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: auto;

  ${props =>
    props.logo &&
    css`
      width: 140px;
    `}
`;

export default Image;
