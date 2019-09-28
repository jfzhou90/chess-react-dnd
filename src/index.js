import React from 'react';
import ReactDOM from 'react-dom';
import Board from './component/Board';
import { observe } from './Game';
import './app.css';

const root = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
);
