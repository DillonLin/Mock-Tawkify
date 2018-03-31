import React from "react";
import { Grid } from 'semantic-ui-react';

const AboutYourselfDescription = (props) => {
  return (
    <div>
      <Grid padded className="progress-tracker">
      <Grid.Row textAlign={"center"} id="title">
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>Tell us a bit about yourself</Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign={"center"} id="paragraph">
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          Tell us a bit about yourself and who you’d like to meet. The more we know, the better. 
          Be candid--this info is for our eyes only. Tawkify profiles and photos will forever be 100% confidential.
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}

export default AboutYourselfDescription;