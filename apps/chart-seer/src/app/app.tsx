import React from 'react';
import { Chart } from '../components/chart/chart';
import Nav from '../components/navigation/nav';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
// import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <br />
      <hr />
      <br />
      <Nav />
      <Chart />
    </div>
  );
}

export default App;
