import React, { Component } from 'react';
import { render } from 'react-dom';
import GanttChart from './Chart';
import './style.css';
import Tasks from './tasks.json';

const parseDates = (s: string, shift?: string): Date => {
  //var [YYYY, MM, DD] = '2014-04-03'.split('-');
  if (shift) {
    return new Date(s + shift);
  }
  return new Date(s + 'T00:00:00');
};

// Populate planned tasks
var tasks = Tasks.map(function (el) {
  return {
    startDate: parseDates(el.startDate),
    endDate: parseDates(el.endDate),
    taskName: el.taskName,
    status: 'PLANNED',
  };
});

const taskStatus = {
  SUCCEEDED: 'bar',
  FAILED: 'bar-failed',
  RUNNING: 'bar-running',
  KILLED: 'bar-killed',
  PLANNED: 'bar-planned',
  COMPLETED: 'bar-completed',
};

// Extract labels
const taskNames = Tasks.map(function (el) {
  return el.taskName;
});

tasks.sort(function (a, b) {
  return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function (a, b) {
  return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

render(
  <GanttChart
    tasks={tasks}
    tickFormat={'%m/%y'}
    taskTypes={taskNames}
    taskStatus={taskStatus}
  />,
  document.getElementById('root')
);
