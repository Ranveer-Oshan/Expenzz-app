import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD7fWgmneah6KdkftBMwcMNekrpQEoTNK4",
    authDomain: "expensify-app-2d1db.firebaseapp.com",
    databaseURL: "https://expensify-app-2d1db.firebaseio.com",
    projectId: "expensify-app-2d1db",
    storageBucket: "expensify-app-2d1db.appspot.com",
    messagingSenderId: "343342621126",
    appId: "1:343342621126:web:0126df35a954aac9d492c7",
    measurementId: "G-65JDZN4XH0"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'flutter',
//     note: 'cross',
//     amount: 20,
//     createdAt: '20/2/20'
// })
// database.ref('expenses').push({
//     description: 'native',
//     note: 'cross v',
//     amount: 2,
//     createdAt: '2/2/20'
// })
// database.ref('expenses').push({
//     description: 'dart',
//     note: 'crosss',
//     amount: 200,
//     createdAt: '20/3/20'
// })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val().name + ' is a Software developer at Amazon')
// })

// database.ref().set({
//     name: 'Ranveer Oshan',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Duliajan',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Saved')
// }).catch((e) => {
//     console.log('Failed', e)
// })
//
// database.ref().update({
//     'job/title': 'Manager',
//     'location/city': 'Mirza'
// })
//
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })
//
//
//
// database.ref('age').set(27)
// database.ref('location/city').set('Guwahati')
//
// database.ref('attributes/height').set('60 kg')
// database.ref('attributes/weight').set('170 cm')
//
// database.ref('isSingle').remove().then(() => {
//     console.log('Removed')
// }).catch((e) => {
//     console.log('Failed', e)
// })

