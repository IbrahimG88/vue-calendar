import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
	apiKey: "AIzaSyAvQHQo2107sDsWR3G3GgiLX2hWJkyK6tc",
    authDomain: "vue-calendar-291ea.firebaseapp.com",
    databaseURL: "https://vue-calendar-291ea.firebaseio.com",
    projectId: "vue-calendar-291ea",
    storageBucket: "vue-calendar-291ea.appspot.com",
    messagingSenderId: "836872845072",
    appId: "1:836872845072:web:d27b58df7e572ef38a9795"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

