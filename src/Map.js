import React, { useState, useEffect } from 'react';
import MapGL, { Source } from 'react-map-gl';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import { json as requestJson } from 'd3-request';

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
    // const [loadData, setLoadData] = useState()

    useEffect(() => {
        requestJson(
            './data/co2.geojson',
            (err, res) => {
                if (!err) {
                    setData(res);
                }
            },
            []
        );
    });

    const onViewportChange = viewport => setViewport({ ...viewport });
    // const { viewport, data } = setState();
    return (
        <div className='map-page'>
            <div className='map-container'>
                <MapGL
                    {...viewport}
                    mapboxApiAccessToken={mapboxToken}
                    onViewportChange={onViewportChange}
                    mapStyle='mapbox://styles/maaaama/ck477vjqb2oq91cowyitdnqcm'
                >
                    <Source type='geojson' data={data}></Source>
                </MapGL>
            </div>
        </div>
    );
}
