import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/layout/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function render() {
  root.render(<App />);
}

if(module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();

