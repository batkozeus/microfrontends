import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(r) {
      console.log('THIS: ', this)
      return r(App, {
        props: {
          store: this.store,
        },
      });
    },
  },
});

function customMount(props) {
  return vueLifecycles.mount(props);
}

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [customMount];

export const unmount = [vueLifecycles.unmount];
