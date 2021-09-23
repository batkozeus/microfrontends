import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById('react'),
  suppressComponentDidCatchWarning: true,
});

function customMount(props) {
  return reactLifecycles.mount(props);
}

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [customMount];

export const unmount = [reactLifecycles.unmount];
