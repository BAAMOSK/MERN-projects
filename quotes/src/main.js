// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.backgroundColor = binding.value;
    //el.style.backgroundColor = 'green';
    if (binding.arg === 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

Vue.directive('selectedItem', {
  bind(el, binding, vnode) {
    if(binding.arg === true) {
      el.style.backgroundColor = 'rebeccapurple'
    } else {
      el.style.fontSize = '5em'
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
