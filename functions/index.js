
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IJJrPJH18aSWiQwhwo8Xo1Fr0OXAB2XDauOGSsuVwAsViTpBuchil5UZbIfQCL3TnIDm7u2Ui3ipUNlWBI4Kipi00z7BK27g1')
// got from https://dashboard.stripe.com/test/dashboard


// (These are the thing we need to setup an API)
// API
// emulate to local for testing

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // to return json

// - API routes   (backend usually runs in 5000 in local)
app.get('/', (request, response) => response.status(200).send('hello world')) // 200 is usually good

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    })
    // 201 is OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);