process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('./server-conf/config');

app.listen(process.env.PORT || 3000, function(){
  console.log("#Start Service Express listening on port %d in %s mode", this.address().port, app.settings.env);
  console.log('homepage: https://heraapp-mockup.herokuapp.com/ ')

});

// heroku
// https://id.heroku.com/login
// user: muttonblue@gmail.com/Pliw@764/202
// https://heraapp.herokuapp.com/heraapp/login
// https://heraapp-mockup.herokuapp.com/
// command :
// $heroku logs --tail
// $git push heroku master
