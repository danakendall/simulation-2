module.exports = {
  login: (req, res, next) => {

  },
  register: function(req, res, next) {
    const dbInstance = req.app.get('db');
    const {session} = req;
    const {username, password} = req.body;
    session.user.username = username;
    dbInstance.create_user(username, password).then(function(user, err) {
      res.status(200).send(req.body);
    })
    console.log('Welcome, ', username);
  },

  //logout NOT WORKING
  logout: function(req, res, next){
    const {session} = req;
    session.destroy();
    res.status(200).send(req.session);
    console.log('I think logout just worked??');
  }
}
