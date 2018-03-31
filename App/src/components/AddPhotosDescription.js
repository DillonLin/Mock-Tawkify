import React from "react";
import { Grid } from 'semantic-ui-react';

const AddPhotosDescription = (props) => {
  return (
    <div>
      <Grid padded className="add-photos-description">
      <Grid.Row textAlign={"center"} id="title">
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>Upload recent photos of yourself</Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign={"center"} id="paragraph">
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
        We ask that you upload at least 2 pictures of yourself; but upload as many as you'd like. We encourage
        you to review your pictures periodically to make sure they are up to date. Snapshots and Selfies just
        fine here. Remember this image is for our internal use and will not be shared with potential matches –
        you will also be able to swap it out later if you wish.
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}

export default AddPhotosDescription;