'use strict';

const functions = require('firebase-functions');

const express = require('express');
const app = express();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


app.post('/api/test', (req, res) => {

    const body = req.body

    res.json({
        success: true,
        body
    })

})


exports.api = functions.https.onRequest(app)

// exports.test = functions.https.onCall((data, context) => {

//     res.json({
//         success: true,
//         message: 'Hola mundo'
//     })

// });