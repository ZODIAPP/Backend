/*
SOFTWARE REQUIREMENTS:
- node.js
- express.js

Run Method:
- $ node index.js
*/

// Module Implementation
const express = require('express');

// App Initialization
const app = express();

/*
CRUD Functionality -- Postman Compatibility

app.get()
app.post()
app,put()
app.delete()
*/

// Index Page (Check cache, user authentication, tokens)
app.get('/', (req, res) => {
    res.send("Call Xcode Index/Login -- IMPLEMENT ME")
})

// Login Page (Index page cannot resolve user)
app.get('/login', (req, res) => {
    res.send("Index Redirect -- Authentication Fault -- IMPLEMENT ME")
})

// Logout Page (UX Logout Button Redirect)
app.get('/logout', (req, res) => {
    res.send("User Logs Out -- Terminate tokens -- IMPLEMENT ME")
})

// Testing -- Display on 127.0.0.1:5000 (Will Re-route later)
app.listen(5000, () => console.log("Listening on port 5000"))