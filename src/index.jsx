import React from 'react';
import {render} from 'react-dom';

import AppComponent from './app/app.component.jsx';

import './scss/app.scss';

render(<AppComponent/>, document.getElementById('app'));