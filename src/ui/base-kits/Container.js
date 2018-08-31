import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 16px;
  background-color: ${props => props.bgColor ? props.bgColor : '#EFEFEF'};
  min-height: ${props => props.minHeight ? props.minHeight : ''};
  ${props => props.centered ? css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ` : ''};
  ${props => props.scrollY ? css`
    height: 100vh;
    overflow-y: auto;
  ` : ''};
  @media screen and (max-width: 480px) {
    min-height: 100%;
    padding: 32px 16px;
    ${props => props.scrollY ? css`
      height: 100%;
      padding: 16px;
      overflow: auto;
    ` : ''};
  }
`;

export default Container;
