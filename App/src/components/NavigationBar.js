import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';
import chatWithExpert from "../assets/images/chat-with-expert-logo.png";

const NavigationBar = (props) => {
  return (
    <div>
      <Grid padded centered>
      <Grid.Row className="navigation-bar">
        <Grid.Column width={2} color={'black'} id="navigation-logo">
        tawkify
        </Grid.Column>
        <Grid.Column width={2} color={'black'} id="button-one">How it works</Grid.Column>
        <Grid.Column width={1} color={'black'} id="button-two">FAQ</Grid.Column>
        <Grid.Column width={1} color={'black'} id="button-three">Stories</Grid.Column>
        <Grid.Column width={1} color={'black'} id="button-four">Sign In</Grid.Column>
        <Grid.Column width={4} color={'black'} id="button-five"></Grid.Column>
        <Grid.Column width={3} color={'black'} id="button-six">1 (888) 494-7280</Grid.Column>
        <Grid.Column width={2} color={'black'} id="button-seven">
        <img id="chat-with-expert" src={chatWithExpert} />
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}

export default NavigationBar;