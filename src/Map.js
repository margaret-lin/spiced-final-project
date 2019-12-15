import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

console.log('mapbox', mapboxToken);

export default function Map() {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    const onViewportChange = viewport => setViewport({ ...viewport });

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={mapboxToken}
                onViewportChange={onViewportChange}
            />
        </div>
    );
}
