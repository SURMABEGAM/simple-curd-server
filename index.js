
const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
require("dotenv").config();

const port =process.env.PORT|| 3000;

// middleware
app.use(cors());
app.use(express.json());

//mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@programming.bmabwzr.mongodb.net/?appName=Programming`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.get('/', (req, res) => {
  res.send('SIMPLE CURD SERVER IS RUNNING!')
})

async function run() {
  try{
    await client.connect();
    await client.db('admin').command({ping:1})
    console.log("ping your deployment .ping your deployment . ping your deployment . ")
  }
  finally{

  }
}
 run().catch(console.dir)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
