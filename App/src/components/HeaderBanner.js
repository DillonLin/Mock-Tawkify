import React from "react";
import { Grid } from 'semantic-ui-react';

const HeaderBanner = (props) => {
  return (
    <div>
      <Grid padded className="header-banner">
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10} textAlign={"center"}>
          We'd like to get to know you better. Tell us about yourself and the sort of someone you'd like to meet.
          Don't worry, no one will see this besides the matchmakers at Tawkify. 
          </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}

export default HeaderBanner;