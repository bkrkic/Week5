// requires file system 'readFile'
var fs = require('fs');



module.exports = function(app) {
  app.post('/api/auth', function(req,res){

    var u = '';
    var p = '';
    u = req.body.email
    p = req.body.password

    fs.readFile('./data/users.json', 'utf-8', function(err, data) {
      if (err) throw err;
      let userArray = JSON.parse(data)

      // must assign userArray to Object.values(userArray.users) from the .json users file
      userArray = Object.values(userArray.users)

      let i = userArray.findIndex(user =>
        ((user.email == u) && (user.password == p)));
      if (i == -1){
        res.send({"ok": false});
      } else {
        userArray[i].valid = true;
        res.send({
          "ok": true,
          "userData": userArray[i]
        })
      }
    });

  });
}
