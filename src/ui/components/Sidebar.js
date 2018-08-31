import React from 'react';
import { Container, SiteHeader, Text } from "../base-kits";
import { SocialLinks } from '../components';

const Sidebar = (props) => (
  <Container bgColor="#161D23" minHeight="100vh" centered>
    <SiteHeader color="#FFFFFF">SHAHID</SiteHeader>
    <Text color="#FFFFFF" margin="10px 0 0 0">&#123; human.muslim.JavaScripter &#125;</Text>
    <SocialLinks />
  </Container>
);

export default Sidebar;
