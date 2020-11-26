import GoogleMapReact from 'google-map-react';

const Map = ({zoom, center}) => {
    return (
        <div className="map">
            <GoogleMapReact bootstrapURLKeys={{key: process.env.REACT_APP_KEY}} defaultZoom={zoom} defaultCenter={center}>

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8765
    },
    zoom: 6
}

export default Map
