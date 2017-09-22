import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap';

import Chart from '../components/Chart';

class WeatherList extends React.Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lat, lon } = cityData.city.coord;

        console.log(temps);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color="orange" units="C" />
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Map</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);