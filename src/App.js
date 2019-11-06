import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './container/LocationListContainer';
import ForecastExtendedContainer from './container/ForecastExtendedContainer';
import './App.css';

const cities = [
  "San Juan de los Morros,ve",
  "Madrid,es",
  "Lima,pe",
  "London,uk",
  "Washington,us",
];

class App extends Component {

  render() {
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
              <LocationListContainer
                cities={cities}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  };
}

export default App;