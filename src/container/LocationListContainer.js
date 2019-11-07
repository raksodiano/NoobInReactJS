import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../action';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../component/LocationList';

class LocationListContainer extends Component {

  componentDidMount() { 
    const { setWeather, setCity, cities, city } = this.props;
    
    setWeather(cities);
    setCity(city);
  }

  handleSelectedLocation = city => { 
    this.props.setCity(city);
  };
  
  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
};

const mapDispatchPropsActions = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities)),
});

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchPropsActions)(LocationListContainer);