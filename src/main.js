import { registerApplication, start } from 'single-spa';
import { createStore } from './store/index.js';

const store = createStore();

registerApplication(
  'vue',
  () => import('./vue/vue.app.js'),
  () => location.pathname.startsWith('/'),
  { store },
);

registerApplication(
  'react',
  () => import('./react/react.app.js'),
  () => location.pathname.startsWith('/'),
  { store },
);

start();
