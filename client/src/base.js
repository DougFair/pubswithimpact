import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBNOpbBjZqAdI5GQdkAt9uCAkLEE-sis_g",
        authDomain: "toppubs-385ff.firebaseapp.com",
        databaseURL: "https://toppubs-385ff.firebaseio.com",
        projectId: "toppubs-385ff",
        storageBucket: "",
        messagingSenderId: "456589425683",
        appId: "1:456589425683:web:e9ebed7b2725eac69e93e6"
      })

const base = Rebase.createClass(firebaseApp.database())
export {firebaseApp}
export default base