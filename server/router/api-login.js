/*Create an array of users (3) in the route file with the following properties. This will become
the source of data for checking user credentials and profile information.*/
module.exports = function(app) {
  app.post('/api/auth', function(req,res){
    let users = [
      { 'username':'admin', 'birthdate':'02/10/1991', 'age':32, 'email':'admin@gmail.com', 'pwd': 'password' },
      { 'username':'student', 'birthdate':'02/10/1991', 'age':32, 'email':'student@gmail.com', 'pwd': 'password123' },
      { 'username':'begokrkic', 'birthdate':'02/10/1991', 'age':32, 'email':'begokrkic@gmail.com', 'pwd': 'password123' }
    ];

    // if (!req.body) {
    //   return res.sendStatus(400)
    // }

    let user = {};
    user.username = '';
    user.birthdate = '';
    user.email = '';
    user.age = 0;
    user.valid = false;

    for (let i=0; i<users.length; i++) {
      if (req.body.email == users[i].email && req.body.password == users[i].pwd) {
        user.username = users[i].username;
        user.birthdate = users[i].birthdate;
        user.age = users[i].age;
        user.email = users[i].email;
        user.valid = true;
      }
    }
    res.send(user);
  })
}
