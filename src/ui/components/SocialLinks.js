import React, { Fragment } from 'react';
import { UnorderedList, ListItem } from '../base-kits';

const SocialLinks = () => (
    <Fragment>
        <UnorderedList socailLinks>
            <ListItem>
                <a href="https://github.com/sh4hids" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            </ListItem>
            <ListItem>
                <a href="https://bd.linkedin.com/in/sh4hids" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </ListItem>
            <ListItem>
                <a href="https://facebook.com/sh4hids" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </ListItem>
            <ListItem>
                <a href="https://twitter.com/sh4hids" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            </ListItem>
        </UnorderedList>
    </Fragment>
);

export default SocialLinks;
