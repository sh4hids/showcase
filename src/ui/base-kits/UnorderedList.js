import styled, { css } from 'styled-components';

const UnorderedList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    ${props => props.socailLinks ? css`
      margin-top: 8px;

      li {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }

        a {
          color: #FFFFFF;
          font-size: 40px;
          margin: 0;
          padding: 0;
        }
      }
    ` : ''};
`;

export default UnorderedList;
