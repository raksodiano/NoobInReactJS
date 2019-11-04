import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './component/LocationList';
import ForecastExtended from './component/ForecastExtended';
import './App.css';

const cities = [
  "San Juan de los Morros,ve",
  "Madrid,es",
  "Lima,pe",
  "London,uk",
  "Washington,us",
];

class App extends Component {

  constructor() {
    super();
    this.state = { 
      city: cities[0]
    };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    const { city } = this.state;
    return (
      <Grid fluid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <div className="App">
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtended
                  city={ city }
                />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  };
}

export default App;
