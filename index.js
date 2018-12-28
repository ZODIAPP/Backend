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
const bodyParser = require('body-parser')

// App Initialization
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*
CRUD Functionality -- Postman Compatibility

app.get()
app.post()
app,put()
app.delete()
*/

// PostgreSQL DB
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://username:password@host:port/database')


// Index Page (Check cache, user authentication, tokens)
app.get('/', (req, res) => {
    res.send("Call Xcode Index/Login -- IMPLEMENT ME");
})

// Login Page (Index page cannot resolve user)
app.get('/register', (req, res) => {
    res.send("Index Redirect -- Authentication Fault -- IMPLEMENT ME");
})

app.post('/register', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let birthdate = req.body.birthdate;

    var new_user = {
        "username": username,
        "password": password,
        "email": email,
        "birth_date": birthdate
    }

    console.log("Got username: " + username)
    console.log("Got password: " + password)
    console.log("Got email: " + email)
    console.log("Got birthdate: " + birthdate)

    /*
        So this whole segment is attempting to find a way
        to make each *_check variable false. We define these
        variables with our preliminary check that sets the
        check to true if the reqest was not blank. Then I provide
        extensive checks using regular expressions to further
        evaluate the viability of the user's request.
        https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js
    */
    // Preliminary empty check (If empty, set variable false)
    var user_check = (username != "")
    var pass_check = (password != "")
    var email_check = (email != "")
    var birth_check = (birthdate != "")

    // Extensive username check
    user_check = /^[a-zA-Z]+$/i.test(username)
    
    // Extensive password check (FIXME Weird symbols can bypass i.e. ∫œß)
    pass_check = /^[\w\W]/i.test(password)

    // Extensive email check 
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    email_check = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(email)
    

    // Extensive birthdate check (and make sure user age is at least 18)
    birth_check = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(birthdate)
    let year = parseInt(birthdate.substring(6, 10))
    let month = parseInt(birthdate.substring(0, 2))
    let day = parseInt(birthdate.substring(3, 5))

    var date = new Date();

    if (birth_check && date.getFullYear() - year < 17){
        birth_check = false
    }

    res.json({ 
        username: user_check,
        password: pass_check,
        email: email_check,
        birthdate: birth_check
    });
    
    // Psuedo DB Push
    //user_db.push(new_user);

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
