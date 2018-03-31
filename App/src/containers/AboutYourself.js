/* ------------------- REACT & REDUX ------------------- */
import React from "react";
import { connect } from 'react-redux';

/* ------------------- ACTIONS ------------------- */
import { setIncome, setGender } from '../actions/AboutYourselfActions.js';

/* ------------------- CSS ------------------- */
import Styled_Layout from '../components/Styled_Layout.js';
import StyledHeader from '../components/Styled_Header.js';
import NavigationBar from '../components/NavigationBar.js';
import HeaderBanner from "../components/HeaderBanner.js";

import Styled_AboutYourself from "../components/Styled_AboutYourself.js";
import AboutYourselfDescription from "../components/AboutYourselfDescription.js";
import AboutYourselfBody from "../components/AboutYourselfBody.js";


import AddPhotosDescription from "../components/AddPhotosDescription.js";
import AddPhotosBody from "../components/AddPhotosBody.js";

/* ------------------- SEMANTIC UI ------------------- */
import { Grid, Divider, Progress, Sticky } from 'semantic-ui-react';

class AboutYourself extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageOne: true,
      pageThree: false,
    }    
  }
  setGender(genderValue) {
    this.props.dispatch(setGender(genderValue));
  }

  continueToPageThree() {
    this.setState({
      pageOne: false,
      pageThree: true
    })
  }

  render() {
      return (
        <Styled_Layout>
          <StyledHeader>
            <Sticky><NavigationBar /></Sticky>
            <HeaderBanner />
          </StyledHeader>
          <Styled_AboutYourself>
            <Divider hidden />
            <div>
            {this.state.pageOne ?
            <Grid><Grid.Row textAlign={"center"}>
              <Grid.Column width={4}></Grid.Column>
              <Grid.Column width={8}><div><Progress value='1' total='3' progress='ratio' color={"green"}/></div></Grid.Column>
              <Grid.Column width={4}></Grid.Column>
            </Grid.Row></Grid>
            :
            <Grid><Grid.Row textAlign={"center"}>
              <Grid.Column width={4}></Grid.Column>
              <Grid.Column width={8}><div><Progress value='3' total='3' progress='ratio' color={"green"}/></div></Grid.Column>
              <Grid.Column width={4}></Grid.Column>
            </Grid.Row></Grid>
            }
            </div>
            <Divider hidden />
            <div>
              { this.state.pageOne ? <AboutYourselfDescription /> : <AddPhotosDescription />}
            </div>
            <Divider hidden />
            <div>
              {
                this.state.pageOne ?
                <AboutYourselfBody continueToPageThree={this.continueToPageThree.bind(this)}/>
                :
                <AddPhotosBody />
              }
            </div>
            </Styled_AboutYourself>
        </Styled_Layout>
      );
  }
}

export default connect((store) => {
    return {
      aboutYourself: store.AboutYourselfReducer
    }
})(AboutYourself);