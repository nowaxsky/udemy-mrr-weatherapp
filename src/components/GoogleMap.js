import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends React.Component {
    // componentDidMount() {
    //     new google.maps.Map(this.refs.map, {
    //         zoom: 12,
    //         center: {
    //             lat: this.props.lat,
    //             lng: this.props.lon
    //         }
    //     })
    // }

    static defaultProps = {
        zoom: 12
    };

    render() {
        // return <div ref="map" />

        return (
            <GoogleMapReact defaultCenter={{lat: this.props.lat, lng: this.props.lon}} defaultZoom={this.props.zoom}>
            </GoogleMapReact>
        )
    }
}