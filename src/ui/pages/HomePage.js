import React, { Component } from 'react';
import { PageWithSidebar } from '../layouts';
import { projects } from '../../data';

class HomePage extends Component {
  render() {
    return(
      <PageWithSidebar projects={projects} />
    );
  }
}

export default HomePage;
