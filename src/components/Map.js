import {Component} from 'react';
import ReactMapGL, {
  // Popup,
  // NavigationControl,
  // FullscreenControl,
  // ScaleControl,
  // GeolocateControl
}from 'react-map-gl';
import { mapboxAccessToken } from '../config'

export default class Map extends Component {
  state = {
    viewport: {

      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  _updateViewport = viewport => {
    this.setState({viewport})
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        width='100%'
        height='100%'
        mapboxApiAccessToken = {mapboxAccessToken}
        onViewportChange={this._updateViewport}
      />
    );
  }
}