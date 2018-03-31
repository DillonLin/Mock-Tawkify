import React from "react";
import { TextArea, Divider, Container, Button, Grid, Dropdown, Form, Menu } from 'semantic-ui-react';



class AboutYourselfBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightPreference: false,
      incomePreference: true,
    }    
  }

  toggleYesHeightPreference() {
    this.setState({
      heightPreference: true
    });
  }

  toggleNoHeightPreference() {
    this.setState({
      heightPreference: false
    });
  }

  toggleYesIncomePreference() {
    this.setState({
      incomePreference: true
    });
  }

  toggleNoIncomePreference() {
    this.setState({
      incomePreference: false
    });
  }

  saveAndContinue() {
    this.props.continueToPageThree();
  }

  render() { 

    const genderOptions = [
      { key: 1, text: ' ', value: 1 },
      { key: 2, text: 'Male', value: 2 },
      { key: 3, text: 'Female', value: 3 },
    ]
    
    const seekingOptions = [
      { key: 1, text: ' ', value: 1 },
      { key: 2, text: 'Men', value: 2 },
      { key: 3, text: 'Women', value: 3 },
      { key: 4, text: 'Men and Women', value: 4 }
    ]
    
    const incomeOptions = [
      { key: 1, text: 'Less than $40,000', value: 1 },
      { key: 2, text: '$40,000-$60,000', value: 2 },
      { key: 3, text: '$60,000-$80,000', value: 3 },
      { key: 4, text: '$80,000-$100,000', value: 4 },
      { key: 5, text: '$100,000-$125,000', value: 5 },
      { key: 6, text: '$125,000-$150,000', value: 6 },
      { key: 7, text: '$150,000-$200,000', value: 7 },
      { key: 8, text: '$200,000-$250,000', value: 8 },
      { key: 9, text: '$250,000-500,000', value: 9 },
      { key: 10, text: '$500,000-$1,000,000', value: 10 },
      { key: 11, text: 'Rather not say', value: 11 }
    ]
    
    const heightOptions = [
      { key: 1, text: '4 ft.', value: 1 },
      { key: 2, text: '4 ft. 1 in.', value: 2 },
      { key: 3, text: '4 ft. 2 in.', value: 3 },
      { key: 4, text: '4 ft. 3 in.', value: 4 },
      { key: 5, text: '4 ft. 4 in.', value: 5 },
      { key: 6, text: '4 ft. 5 in.', value: 6 },
      { key: 7, text: '4 ft. 6 in.', value: 7 },
      { key: 8, text: '4 ft. 7 in.', value: 8 },
      { key: 9, text: '4 ft. 8 in.', value: 9 },
      { key: 10, text: '4 ft. 9 in.', value: 10 },
      { key: 11, text: '4 ft. 10 in.', value: 11 },
      { key: 12, text: '4 ft. 11 in.', value: 12 },
      { key: 13, text: '4 ft.', value: 13 },
      { key: 14, text: '5 ft. 1 in.', value: 14 },
      { key: 15, text: '5 ft. 2 in.', value: 15 },
      { key: 16, text: '5 ft. 3 in.', value: 16 },
      { key: 17, text: '5 ft. 4 in.', value: 17 },
      { key: 18, text: '5 ft. 5 in.', value: 18 },
      { key: 19, text: '5 ft. 6 in.', value: 19 },
      { key: 20, text: '5 ft. 7 in.', value: 20 },
      { key: 21, text: '5 ft. 8 in.', value: 21 },
      { key: 22, text: '5 ft. 9 in.', value: 22 },
      { key: 23, text: '5 ft. 10 in.', value: 23 },
      { key: 24, text: '5 ft. 11 in.', value: 24 },
      { key: 25, text: '6 ft.', value: 25 },
      { key: 26, text: '6 ft. 1 in.', value: 26 },
      { key: 27, text: '6 ft. 2 in.', value: 27 },
      { key: 28, text: '6 ft. 3 in.', value: 28 },
      { key: 29, text: '6 ft. 4 in.', value: 29 },
      { key: 30, text: '6 ft. 5 in.', value: 30 },
      { key: 31, text: '6 ft. 6 in.', value: 31 },
      { key: 32, text: '6 ft. 7 in.', value: 32 },
      { key: 33, text: '6 ft. 8 in.', value: 33 },
      { key: 34, text: '6 ft. 9 in.', value: 34 },
      { key: 35, text: '6 ft. 10 in.', value: 35 },
      { key: 36, text: '6 ft. 11 in.', value: 36 },
      { key: 37, text: '7 ft.', value: 37 },
    ]

    const { value } = this.state;
    const { activeItem } = this.state;

    return (
      <div>
        <Grid padded className="about-yourself-body">
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6} textAlign={"center"}>
            <div id="your-gender">YOUR GENDER</div>
            <div><Dropdown id="select-your-gender" options={genderOptions} placeholder='Choose an option' selection value={value}/></div>
            <div id="your-gender-description">Select your gender</div>
            </Grid.Column>
            <Grid.Column width={6} textAlign={"center"}>
            <div id="gender-preference">YOU ARE SEEKING</div>
            <div><Dropdown id="select-desired-gender" options={seekingOptions} placeholder='Choose an option' selection value={value}/></div>
            <div id="gender-preference-description">Select the sexual orientaion you’re seeking</div>
            </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6} textAlign={"center"}>
          <div id="your-location">LOCATION</div> 
            <div><Form.Input id="location-form" size={"large"} placeholder='Enter Your Zipcode' /></div>
            <div id="location-description">Where are you located?</div>
            </Grid.Column>
            <Grid.Column width={6} textAlign={"center"}>
            <div id="your-birthday">YOUR BIRTHDAY</div>
            <Container><Grid><Grid.Row centered>
              <Grid.Column width={3}><Form>
                    <Form.Input id="birthday-form-month" placeholder="MM" />
              </Form></Grid.Column>
              <Grid.Column width={3}><Form>
                    <Form.Input id="birthday-form-day" placeholder="DD" />
              </Form></Grid.Column>
              <Grid.Column width={3}><Form>
                    <Form.Input id="birthday-form-year" placeholder="YYYY" />
              </Form></Grid.Column>
            </Grid.Row></Grid></Container>
            </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6} textAlign={"center"}>
          <div id="your-height">YOUR HEIGHT</div>
            <div><Dropdown id="select-height" options={heightOptions} placeholder='Choose an option' selection value={value}/></div>
            <div id="height-description">What is your height?</div>
            </Grid.Column>
            <Grid.Column width={6} textAlign={"center"}>
            {
              this.state.heightPreference ? 
              <div>
                <Button id="yes-height-true" color={"blue"} onClick={this.toggleYesHeightPreference.bind(this)}>Yes</Button>
                <Button id="no-height-false" color={"grey"} onClick={this.toggleNoHeightPreference.bind(this)}>No</Button>
              </div>
              : 
              <div>
                <Button id="yes-height-false" color={"grey"} onClick={this.toggleYesHeightPreference.bind(this)}>Yes</Button>
                <Button id="no-height-true" color={"blue"} onClick={this.toggleNoHeightPreference.bind(this)}>No</Button>
              </div>
            }
            <div id="height-preference">Is height a factor in your match preferences?</div>
            </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6} textAlign={"center"}>
            <div id="your-occupation">OCCUPATION</div>
            <div><Form><TextArea id="occupation-form" placeholder='Tell us more' /></Form></div> 
            <div id="occupation-description">What do you do?</div> 
            </Grid.Column>
            <Grid.Column width={6} textAlign={"center"}>
            <div id="your-income">INCOME</div>
              <div><Dropdown id="select-income" options={incomeOptions} placeholder='Choose an option' selection value={value}/></div>
              <div id="income-description">Why? This is one form of an indicator...</div>
            </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6} textAlign={"center"}>
          {
              this.state.incomePreference ? 
              <div>
                <Button id="yes-income-true" color={"blue"} onClick={this.toggleYesIncomePreference.bind(this)}>Yes</Button>
                <Button id="no-income-false" color={"grey"} onClick={this.toggleNoIncomePreference.bind(this)}>No</Button>
              </div>
              : 
              <div>
                <Button id="yes-income-false" color={"grey"} onClick={this.toggleYesIncomePreference.bind(this)}>Yes</Button>
                <Button id="no-income-true" color={"blue"} onClick={this.toggleNoIncomePreference.bind(this)}>No</Button>
              </div>
            }
          <div id="income-preference">Is income a factor in your match preferences?</div> 
            </Grid.Column>
            <Grid.Column width={6} textAlign={"center"}>
              <div id="your-interests">INTERESTS</div>
              <div><Form><TextArea id="interests-form" placeholder='Tell us more' /></Form></div> 
              <div id="interests-description">Tell us a little more about yourself and what you like to do.</div>
              <div id="interests-description">We read everything, so please share!</div>
            </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Grid.Row><Container><Grid><Grid.Row centered>
          <div><Button id="save-and-continue" color='twitter' onClick={() => this.props.continueToPageThree()}>SAVE AND CONTINUE</Button></div>
        </Grid.Row></Grid></Container></Grid.Row>
        </Grid>
      </div>
      )
    }
}

export default AboutYourselfBody;