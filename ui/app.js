"use strict";

var React = require("react");
var el = React.createElement;
var RouteSelector = require("./route-selector");
var Schedule = require("./schedule");
var Trip = require("./trip");
var TwoColumn = require("./two-column");
var colors = require("./colors");

module.exports = React.createClass({
  render: function() {
    return el(TwoColumn, {
      style: {
        "height": "100%",
        "width": "100%",
      },
      leftStyle: {
        "width": "20rem",
      },
      leftChildren: this.renderScheduleSection(),
      rightChildren: this.renderSelectedTrip(),
      rightStyle: {
      },
    });
  },

  renderScheduleSection: function() {
    return [
      el(RouteSelector, {
        style: {
          margin: "1.5rem 1rem .5rem 1rem",
        },
        route: this.props.state.get("route").toJS(),
        onChange: this.props.dispatch.bind(null, "change-route"),
      }),
      this.renderSchedule(),
    ];
  },

  renderSchedule: function() {
    var schedule = this.props.state.get("schedule");
    if (schedule) {
      return el(Schedule, {
        className: "clearfix",
        schedule: schedule,
        selectedTrip: this.props.state.get("selectedTrip"),
        dispatch: this.props.dispatch,
      });
    }
  },

  renderSelectedTrip: function() {
    var trip = this.props.state.get("selectedTrip");
    if (trip) {
      return el(Trip, {
        trip: trip,
      });
    }
  },
});
