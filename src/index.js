import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: #161D23;
    font-family: 'Fira Mono', monospace;
    font-size: 16px;
    line-height: 1.428;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
