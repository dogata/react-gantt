import React, { Component } from 'react';
import * as d3 from 'd3';
/* eslint-disable import/first */
window.d3 = d3;
import 'd3-gantt-chart';

class GanttChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    const { tasks, taskTypes, taskStatus, tickFormat } = this.props;
    var gantt = window.d3
      .gantt()
      .taskTypes(taskTypes)
      .taskStatus(taskStatus)
      .tickFormat(tickFormat);
    gantt(tasks);
    const svg = d3.select('.chart'); // select plot area
    const data = [12, 5, 6, 6, 9, 10];
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('line')
      .attr('x', this.props.width / 2)
      .attr('y', this.props.height);
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => this.props.height - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('fill', 'green');
  }

  render() {
    return null;
  }
}

export default GanttChart;
