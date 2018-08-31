import React from 'react';
import { Grid } from '@material-ui/core';
import { Container, TitleMedium, LinkButton, ProjectCard } from '../base-kits';

const Main = (props) => (
  <Container minHeight="100vh" scrollY>
    <Grid container spacing={16}>
      {props.projects.map(project => (
        <Grid key={project.id} item xs={12} sm={6}>
          <ProjectCard square={true}>
            <TitleMedium>{project.title}</TitleMedium>
            <p>{project.description}</p>
            <LinkButton href={project.link} target="_blank" rel="noreferrer">see live</LinkButton>
          </ProjectCard>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Main;
