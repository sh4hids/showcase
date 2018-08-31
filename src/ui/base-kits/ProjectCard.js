import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const ProjectCard = styled(Paper)`
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;

  h2, p {
    margin-bottom: 10px;
  }
`;

export default ProjectCard;
