module.exports = {
  authChecker: function(req, res, next){
    if(!req.session.user) {
      req.session.user = {};
    }
      next();
  }
}
