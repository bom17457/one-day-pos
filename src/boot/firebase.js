import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDXzPZDZWsqes67U88np-_JpoxeRVWHqkc",
    authDomain: "bkk-vipa-pos.firebaseapp.com",
    projectId: "bkk-vipa-pos",
    storageBucket: "bkk-vipa-pos.appspot.com",
    messagingSenderId: "225811113495",
    appId: "1:225811113495:web:9470d0a4494bc81f505e52"
};

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
Vue.prototype.$firebase.$database = firebase.database();
Vue.prototype.$firebase.$auth = firebase.auth();

export default ({ app }) => {
    app.firebase = firebase
}