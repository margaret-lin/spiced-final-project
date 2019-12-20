import React, { PureComponent } from 'react';

const defaultContainer = ({ children }) => (
    <div className='control-panel'>{children}</div>
);

export default class ControlPanel extends PureComponent {
    render() {
        const Container = this.props.containerComponent || defaultContainer;
        const { settings } = this.props;

        return (
            <Container>
                <p>
                    Map showing cumulative carbon dioxide (CO₂) by country in
                    year <b>{settings.year}</b>. Hover over a state to see
                    details.
                </p>
                <p>
                    Data source:{' '}
                    <a href='https://ourworldindata.org/grapher/annual-co-emissions-by-region'>
                        Our World in Data
                    </a>
                </p>
                <hr />

                <div key={'year'} className='input'>
                    <label>Year</label>
                    <input
                        type='range'
                        value={settings.year}
                        min={1950}
                        max={2017}
                        step={1}
                        onChange={evt =>
                            this.props.onChange('year', evt.target.value)
                        }
                    />
                </div>
            </Container>
        );
    }
}
