import Vue from 'vue'
import App from './App.vue'
import router from './router/routesList'
import './assets/stylesheets/application.scss'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import moment from 'moment'
import VueSweetalert2 from 'vue-sweetalert2';
import VueBbob from '@bbob/vue2';

// CSS for SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false


Vue.use(VueBbob);
Vue.use(VueSweetalert2);
Vue.use(VueQuillEditor);

Vue.prototype.moment = moment;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')