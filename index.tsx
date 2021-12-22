import React, { Component } from 'react';
import { render } from 'react-dom';
import GanttChart from './Chart';
import './style.css';

/* Overlay precedence towards the end of list */
const tasks = [
  {
    startDate: new Date('Sat Dec 08 21:00:00 EST 2012'),
    endDate: new Date('Sat Dec 08 24:00:00 EST 2012'),
    taskName: 'ModelA',
    status: 'RUNNING',
  },
  {
    startDate: new Date('Sun Dec 09 04:56:32 EST 2012'),
    endDate: new Date('Sun Dec 09 10:35:47 EST 2012'),
    taskName: 'ModelA',
    status: 'RUNNING',
  },
  {
    startDate: new Date('Sun Dec 09 04:02:45 EST 2012'),
    endDate: new Date('Sun Dec 09 04:48:56 EST 2012'),
    taskName: 'ModelB',
    status: 'RUNNING',
  },
  {
    startDate: new Date('Sun Dec 09 01:40:11 EST 2012'),
    endDate: new Date('Sun Dec 09 03:26:35 EST 2012'),
    taskName: 'ModelA',
    status: 'SUCCEEDED',
  },
  {
    startDate: new Date('Sun Dec 09 01:08:42 EST 2012'),
    endDate: new Date('Sun Dec 09 01:33:42 EST 2012'),
    taskName: 'ModelB',
    status: 'FAILED',
  },
  {
    startDate: new Date('Sun Dec 09 09:02:45 EST 2012'),
    endDate: new Date('Sun Dec 09 09:48:56 EST 2012'),
    taskName: 'ModelB',
    status: 'RUNNING',
  },
  {
    startDate: new Date('Sun Dec 09 08:40:11 EST 2012'),
    endDate: new Date('Sun Dec 09 08:46:35 EST 2012'),
    taskName: 'ModelA',
    status: 'SUCCEEDED',
  },
  {
    startDate: new Date('Sun Dec 09 11:08:42 EST 2012'),
    endDate: new Date('Sun Dec 09 11:33:42 EST 2012'),
    taskName: 'ModelB',
    status: 'FAILED',
  },
  {
    startDate: new Date('Sat Dec 08 23:12:24 EST 2012'),
    endDate: new Date('Sun Dec 09 00:26:13 EST 2012'),
    taskName: 'ModelA',
    status: 'KILLED',
  },
];

const taskStatus = {
  SUCCEEDED: 'bar',
  FAILED: 'bar-failed',
  RUNNING: 'bar-running',
  KILLED: 'bar-killed',
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

const parseDates = (s: string): Date => {
  //var [YYYY, MM, DD] = '2014-04-03'.split('-');
  return new Date(s+"T00:00:00");
}
