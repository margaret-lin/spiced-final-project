import React, { useState, useEffect } from 'react';
import MapGL, { Source, Layer } from 'react-map-gl';

import { dataLayer } from './map-style.js';
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 700 + 'px',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 3
    });
    const [data, setData] = useState(null);

    useEffect(() => {
        // console.log('CO2 is...', CO2)

        fetch('/co2.geojson').then(res => {
            console.log('res is', res);
            res.json().then(data => {
                console.log('data is', data);
            });
        });
    }, [data]);

    const onViewportChange = viewport => setViewport({ ...viewport });
    console.log('data', data);
    // const { viewport, data } = setState();
    return (
        <div className='map-page'>
            <div className='map-container'>
                <MapGL
                    {...viewport}
                    mapboxApiAccessToken={mapboxToken}
                    onViewportChange={onViewportChange}
                >
                    <Source type='geojson' data={data}>
                        <Layer {...dataLayer} />
                    </Source>
                </MapGL>
            </div>
        </div>
    );
}
