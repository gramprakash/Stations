
const React = require('react');

const Stylesheet = require('react-native').StyleSheet;
const View = require('react-native').View;
const Text = require('react-native').Text;
const MapView = require('react-native').MapView;

const Map = React.createClass({
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  },

  onRegionChange(region) {
    this.setState({ region });
  },

  render() {
    return (
      <MapView
  style={{height: 200, margin: 40}}
  showsUserLocation={true}
/>
    );
  }
});

const styles = Stylesheet.create({
  container: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
map: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},

font: {
  fontWeight: 'bold',
  fontSize: 40
}
});

module.exports = Map;
