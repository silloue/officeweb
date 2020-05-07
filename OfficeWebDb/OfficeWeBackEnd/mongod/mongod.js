const MongoClient = require("mongodb");

const client = MongoClient.MongoClient;

const url = 'mongodb://127.0.0.1:27017'

module.exports = {
    client,
    url
}