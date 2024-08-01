import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary() {
    // Customize the root error boundary for your micro-frontend here.
    return <div>Something went wrong</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;