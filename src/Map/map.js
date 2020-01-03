import React, { Component } from 'react';
import { render } from 'react-dom';
import MapGL, { Source, Layer } from 'react-map-gl';
import ControlPanel from './control-panel';

import { dataLayer } from './map-style.js';
import { updatePercentiles } from './utils';
import { json as requestJson } from 'd3-request';

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default class Map extends Component {
    state = {
        year: 1751,
        data: null,
        hoveredFeature: null,
        viewport: {
            latitude: 40,
            longitude: -100,
            zoom: 1.5,
            bearing: 0,
            pitch: 0
        }
    };

    componentDidMount() {
        requestJson('co2-emission.geojson', (error, response) => {
            if (!error) {
                this._loadData(response);
            }
        });
    }

    _loadData = data => {
        updatePercentiles(data, f => f.properties.co2Emission[this.state.year]);
        this.setState({ data });
    };

    _updateSettings = (name, value) => {
        if (name === 'year') {
            this.setState({ year: value });

            const { data } = this.state;
            if (data) {
                updatePercentiles(data, f => f.properties.co2Emission[value]);
                this.setState({ data: { ...data } });
            }
        }
    };

    _onViewportChange = viewport => this.setState({ viewport });

    _onHover = event => {
        const {
            features,
            srcEvent: { offsetX, offsetY }
        } = event;
        const hoveredFeature =
            features && features.find(f => f.layer.id === 'data');

        this.setState({ hoveredFeature, x: offsetX, y: offsetY });
    };

    _renderTooltip() {
        const { hoveredFeature, x, y } = this.state;

        return (
            hoveredFeature && (
                <div className='tooltip' style={{ left: x, top: y }}>
                    <div>{hoveredFeature.properties.name}</div>
                    <div>
                        {(hoveredFeature.properties.value / 1000000).toFixed(2)}{' '}
                        million tonne
                    </div>
                    <div>
                        Percentile:{' '}
                        {(
                            (hoveredFeature.properties.percentile / 8) *
                            100
                        ).toFixed(2)}
                    </div>
                </div>
            )
        );
    }

    render() {
        const { viewport, data } = this.state;

        return (
            <div id='map'>
                <div className='map-container'>
                    <MapGL
                        {...viewport}
                        width='100%'
                        height='100%'
                        mapStyle='mapbox://styles/mapbox/light-v9'
                        onViewportChange={this._onViewportChange}
                        mapboxApiAccessToken={mapboxToken}
                        onHover={this._onHover}
                    >
                        <Source type='geojson' data={data}>
                            <Layer {...dataLayer} />
                        </Source>
                        {this._renderTooltip()}
                    </MapGL>

                    <ControlPanel
                        containerComponent={this.props.containerComponent}
                        settings={this.state}
                        onChange={this._updateSettings}
                    />
                </div>
            </div>
        );
    }
}
