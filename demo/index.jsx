import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import '../dist/index.css'
import App from './App';

render(
    <App />
    , document.getElementById('root'));

