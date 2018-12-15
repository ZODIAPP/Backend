/*

SOFTWARE REQUIREMENTS:
- node.js
- express.js

Run Methods:
- $ node index.js
- $ nodemon index.js 

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

// Psuedo DB (Temporary)
var user_db = [];


// Index Page (Check cache, user authentication, tokens)
app.get('/', (req, res) => {
    res.send("Call Xcode Index/Login -- IMPLEMENT ME");
})

// Login Page (Index page cannot resolve user)

app.get('/login', (req, res) => {
    res.send("Index Redirect -- Authentication Fault -- IMPLEMENT ME");
})

app.post('/login', (req, res) => {

    var new_user = {
        "username": req.param('username'),
        "password": req.param('password'),
        "birth_date": req.param('birth_date')
    }

    // Psuedo DB Push
    user_db.push(new_user);
    
    res.send(`Added New User! Username: ${new_user.username} // Password: ${new_user.password} // Birth Date: ${new_user.birth_date}`);
})


// Logout Page (UX Logout Button Redirect)
app.get('/logout', (req, res) => {
    res.send("User Logs Out -- Terminate tokens -- IMPLEMENT ME");
})

app.get('/api/users', (req, res) => {
    var i;
    var cur_user;
    for (i = 0; i < user_db.length; i++){
        cur_user = user_db[i];
        res.write(`User: ${cur_user.username} // Password: ${cur_user.password} // Birth Date: ${cur_user.birth_date}\n`);
    }
    res.end();
})



// Testing -- Display on 127.0.0.1:PORT (Will Re-route later)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
