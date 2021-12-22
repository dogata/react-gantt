import React, { Component } from 'react';
import { render } from 'react-dom';
import GanttChart from './Chart';
import './style.css';
import Tasks from './tasks.json';

const parseDates = (s: string): Date => {
  //var [YYYY, MM, DD] = '2014-04-03'.split('-');
  return new Date(s + 'T00:00:00');
};

/* Overlay precedence towards the end of list */
const tasks = [
  {
    startDate: parseDates(Tasks[0].startDate),
    endDate: parseDates(Tasks[0].endDate),
    taskName: Tasks[0].taskName,
    status: "PLANNED"
  },
];

const taskStatus = {
  SUCCEEDED: 'bar',
  FAILED: 'bar-failed',
  RUNNING: 'bar-running',
  KILLED: 'bar-killed',
  PLANNED: 'bar-planned',
};

const taskNames = ['ModelA', 'ModelB'];

render(
  <GanttChart
    tasks={tasks}
    tickFormat={'%m/%y'}
    taskTypes={taskNames}
    taskStatus={taskStatus}
  />,
  document.getElementById('root')
);
