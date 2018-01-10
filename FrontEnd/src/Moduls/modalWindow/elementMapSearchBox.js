import React from 'react';
import {compose, withProps, lifecycle} from 'recompose';
import {withScriptjs} from 'react-google-maps';
import {StandaloneSearchBox} from 'react-google-maps/lib/components/places/StandaloneSearchBox';

export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `400px`}}/>,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};
      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          this.setState({
            places,
          });
        },
      })
    },
  }),
  withScriptjs
)(props =>
  <div>
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="адресс"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `348px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 1px 6px rgba(0, 0, 0, 0.35)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </StandaloneSearchBox>
    {props.onSelectAddress(props.places)}
  </div>
);