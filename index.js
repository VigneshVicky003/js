const express = require('express');

const app = express();

// HTTP methods
// get(read), post(create), put(update), delete(delete)

// HTTP codes
// 1xx - informational
// 2xx - success
// 3xx - redirection
// 4xx - client side error
// 5xx - server side error

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/profile')