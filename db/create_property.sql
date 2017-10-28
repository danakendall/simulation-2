INSERT INTO properties
(propertyname, propertydescription, city, state, zip, loanamount,
  monthlymortgage, desiredrent, userid, imageurl)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9);
