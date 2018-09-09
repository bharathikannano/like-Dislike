import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LikeDislike from './components/like-dislike';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LikeDislike />, document.getElementById('root'));
registerServiceWorker();
