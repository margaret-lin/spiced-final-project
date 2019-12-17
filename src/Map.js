import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
    const [viewport, setViewport] = useState({
        width: 100 + 'vw',
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 3
    });

    const onViewportChange = viewport => setViewport({ ...viewport });

    return (
        <div className='map-page'>
            <div>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={mapboxToken}
                    onViewportChange={onViewportChange}
                    mapStyle='mapbox://styles/maaaama/ck477vjqb2oq91cowyitdnqcm'
                />
                <p>Writing something in map...</p>
            </div>
        </div>
    );
}
