'use strict';
import React, { Component } from 'react';

function Today(props) {
    return (
        <div classname="wethear-now inline-items">
            <div classname="temperature-sensor">{'{'}props.current{'}'}</div>
            <div classname="max-min-temperature">
                <span>{'{'}props.low{'}'}</span>
                <span>{'{'}props.high{'}'}</span>
            </div>
            <svg classname="olymp-weather-partly-sunny-icon"><use xlinkhref="icons/icons-weather.svg#olymp-weather-partly-sunny-icon" /></svg>
        </div>
    )
}

function Description(props) {
    return (
        <div classname="wethear-now-description">
            <div classname="climate">{'{'}props.climate{'}'}</div>
            <span>Real Feel: <span>{'{'}props.current{'}'}</span></span>
            <span>Chance of Rain: <span>{'{'}props.chance{'}'}</span></span>
        </div>
    )
}

function Day(props) {
    return (
        <li>
            <div classname="day">{'{'}props.day{'}'}</div>
            <svg classname="{props.climateclass}"><use xlinkhref="{props.icon}" /></svg>
            <div classname="temperature-sensor-day">{'{'}props.temperature{'}'}</div>
        </li>
    )
}

function Forecast(props) {

    return (
    <ul className="weekly-forecast">
        <Day day='sun' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
        <Day day='mon' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
        <Day day='tue' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
        <Day day='wed' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
        <Day day='thu' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
        <Day day='fri' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
        <Day day='sat' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
    </ul>
    )
}

function Date(props) {
    return (
    <div className="date-and-place">
        <h5 className="date">{props.date}</h5>
        <div className="place">{props.location}</div>
    </div>
    )
}

class Weathear extends Component {
    render() {
        return (
            <div className="ui-block">
                <div className="widget w-wethear">
                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
                    <Today current='64°' low='58°' high='76°' />
                    <Description climate='Partly Sunny' current='67°' chance='49%' />
                    <Forecast />
                    <Date date='Saturday, March 26th' location='San Francisco, CA' />
                </div>
            </div>
        );
    }
}

export default Weathear;