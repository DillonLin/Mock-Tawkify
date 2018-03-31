import React from "react";
import { Divider, Container, Button, Grid, Dropdown, Form, Menu } from "semantic-ui-react";

class AddPhotosBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goBack: false
    }    
  }

  render() {
    return (
      <div>
        <Grid padded className="add-photos-body">
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8} textAlign={"center"} id="add-photo">
            <i className="far fa-image"></i>
            <div id="instructions">Drag and drop a photo</div>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
        <Grid.Row><Container><Grid><Grid.Row centered>
          <div><Button id="choose-file" color={"pink"}>CHOOSE FILE</Button></div>
        </Grid.Row></Grid></Container></Grid.Row>
        <Grid.Row><Container><Grid><Grid.Row centered>
          <div id="parameters">Your pictures must be 4 megabytes or smaller. If you have problems, please contact us at 1 (646) 791-3283</div>
        </Grid.Row></Grid></Container></Grid.Row>
        <Divider hidden />
        <Grid.Row><Container><Grid><Grid.Row centered>
          <div><Button id="save-and-continue" color="twitter">SAVE AND CONTINUE</Button></div>
        </Grid.Row></Grid></Container></Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default AddPhotosBody;