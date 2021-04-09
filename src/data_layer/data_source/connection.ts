var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'https://[username]:[password]@[server]:[9200]/',
    'https://[username]:[password]@[server]:[port]/'
  ]
});

module.exports = client;  