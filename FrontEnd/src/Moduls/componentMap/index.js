/*global google*/
import React, {Component} from "react"
import {connect} from 'react-redux';
import {compose, withProps, lifecycle} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps"

class Map extends Component {
  render() {
    // Координаты конечного маршрута
    const DirectionsCoordinatesLat = this.props.address.coordinates.lat;
    const DirectionsCoordinatesLng = this.props.address.coordinates.lng;

    // Создание самой карты
    const MapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `100%`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();

          DirectionsService.route({
            origin: new google.maps.LatLng(53.9000000, 27.5666700), // Координаты начального маршрута "Минска"
            destination: new google.maps.LatLng(DirectionsCoordinatesLat, DirectionsCoordinatesLng),
            travelMode: google.maps.TravelMode.DRIVING, // Тип маршрута "Машина"
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            }
          })
        }
      })
    )((props) =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={new google.maps.LatLng(DirectionsCoordinatesLat, DirectionsCoordinatesLng)}
      >
        {props.directions && <DirectionsRenderer directions={props.directions}/>}
      </GoogleMap>
    );

    return (
      <MapComponent/>
    )
  }
}

// Получает данные об конечном адресе
export default connect(
  state => ({
    address: state.selectAddress
  })
)(Map)
