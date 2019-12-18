import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 700 + 'px',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 3
    });

    const onViewportChange = viewport => setViewport({ ...viewport });

    return (
        <div className='map-page'>
            <div className='map-container'>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={mapboxToken}
                    onViewportChange={onViewportChange}
                    mapStyle='mapbox://styles/maaaama/ck477vjqb2oq91cowyitdnqcm'
                    scrollZoom={false}
                />
                {/* <p>Writing something in map...</p> */}
            </div>
        </div>
    );
}
