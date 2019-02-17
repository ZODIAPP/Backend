/*

SOFTWARE REQUIREMENTS:
- Realm (included in package.json)

For help on module:
- https://realm.io/docs/javascript/latest
- https://www.youtube.com/watch?v=O3ZqG7h5ZHw

*/
const Realm = require('realm');
const Promise = require('promise');

const userSchema = {
    name: 'User',
    properties: {
        name: 'string',
        password: 'string',
        email: 'string',
        birth: 'string'
    }
};

const createUser = (newUser) => {
    Realm.open({schema: [userSchema]}).then(realm => {
        realm.write(() => {
            const regUser = realm.create('User', {
                name: newUser.name,
                password: newUser.password,
                email: newUser.email,
                birth: newUser.birth,
                number: newUser.number
            });
            // TESTING -- DELETE BEFORE RELEASE
            console.log(`Successfully added user ${JSON.stringify(regUser)}`)
        });
        // TESTING -- DELETE BEFORE RELEASE
        const users = realm.objects('User');
        console.log(`Users: ${JSON.stringify(users)}`);
    }).catch((error) => {
        console.log(`Error: ${error}`);
    });
};


module.exports = {
    createUser,
};