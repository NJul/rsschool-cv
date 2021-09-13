import './css/lib/highlight/default.min.css';
import './css/style.css';

import './js/scripts.js';

/* React */
require('regenerator-runtime/runtime');
import { render } from 'react-dom';

import Tabs from './components/Tabs';
import Slider from './components/Slider';

render(<Tabs />, document.getElementById('tabs'));
render(<Slider />, document.getElementById('slider'));
