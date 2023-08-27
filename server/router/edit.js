/*Create an array of users (3) in the route file with the following properties. This will become
the source of data for checking user credentials and profile information.*/

// requires file system for 'readFile' and 'writeFile'
var fs = require('fs');

// requires class/object file UserDetails.js

module.exports = function(app) {
  app.post('/edit', function(req,res){

    console.log(req.body)

    // (req.body.usernameNew, req.body.birthdateNew, req.body.ageNew, req.body.email, req.body.passwordNew, req.body.valid);
    let uArray = []

    fs.readFile('./data/users.json', 'utf-8', function(err, data){
      if (err) {
        res.send({"update": false});
        throw err;
      }
      uArray = JSON.parse(data);
      uArray.push(customer)
      uArrayjson = JSON.stringify(uArray);
      fs.writeFile('./data/users.json', uArrayjson,'utf-8', function(err){
        if (err) {
          res.send({"update": false});
          throw err;
      }
      res.send({"saved": true});
      });
    });

  });
}
