var request = require('superagent-bluebird-promise');
var path = require('path');

module.exports.client = function(apikey,url) {
  var api = path.join(url,"api","apps",apikey);
  var authsieve = {
    authenticate: function(user,pass) {
       return request.post(path.join(api,'authenticate'))
       .send({ username: user,password: pass })
       .promise();
    },        
  };

  return authsieve;
};
