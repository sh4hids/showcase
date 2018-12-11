import React from 'react';
import { Container, SiteHeader, Text, Image } from '../base-kits';
import { SocialLinks } from '../components';
import shahidLogo from '../assets/images/shahid-logo.png';

const Sidebar = props => (
  <Container bgColor="#161D23" minHeight="100vh" centered>
    <Image src={shahidLogo} alt="SHAHID" logo />
    <Text color="#FFFFFF" margin="10px 0 0 0">
      &#123; human.muslim.JavaScripter &#125;
    </Text>
    <SocialLinks />
  </Container>
);

export default Sidebar;
