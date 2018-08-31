import React, { Fragment } from 'react';
import { Sidebar, Main } from '../components';
import { Grid } from '@material-ui/core';

const PageWithSidebar = (props) => (
  <Fragment>
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={8}>
      <Main projects={props.projects} />
      </Grid>
    </Grid>
  </Fragment>
);

export default PageWithSidebar;
