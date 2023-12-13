const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://shreya10chavan:YsP8j2cM6GFsnRHc@cluster0.dnjkjfe.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;