

module.exports = {
  createProperty: function(req, res, next){
    const {session} = req;
    const {PropertyName, PropertyDescription, City,
      State, Zip, LoanAmount, MonthlyMortgage, DesiredRent, UserId, ImageUrl} = req.body;
    const dbInstance = req.app.get('db');

    dbInstance.create_property(PropertyName, PropertyDescription, City,
      State, Zip, LoanAmount, MonthlyMortgage, DesiredRent, UserId)
      .then(function() {
      res.status(200).send(req.body);
    });
    console.log(`Created property ${PropertyName}`);
  },

  getProperties: function(req, res, next) {
    const dbInstance = req.app.get('db');
    dbInstance.get_properties().then(function(properties, err){
      res.send(properties);
    });
    console.log('got properties');
  },

  //delete NOT working
  deleteProperty: function(req, res, next){
    const {PropertyId} = req.body.PropertyId;
    const dbInstance = req.app.get('db');
    dbInstance.delete_property(PropertyId);

    console.log(`deleted property: ${PropertyId}`);
  },

  filter: function(req, res, next) {
  }

}
