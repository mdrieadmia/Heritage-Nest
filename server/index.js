const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cricab9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        const popularCollection = client.db("heritagenest").collection('popular');
        const newlistedCollection = client.db("heritagenest").collection('newlisted');
        const mearbyCollection = client.db("heritagenest").collection('nearby');

        app.get('/', (req, res) => {
            res.send("Heritage Nest server is running...")
        })

        // Get all popular properties data
        app.get('/popular', async(req, res)=>{
            const result = await popularCollection.find().toArray();
            res.send(result)
        })

        // Get all new listed properties data
        app.get('/newlisted', async(req, res)=>{
            const result = await newlistedCollection.find().toArray();
            res.send(result)
        })

        // Get all new listed properties data
        app.get('/nearby', async(req, res)=>{
            const result = await newlistedCollection.find().toArray();
            res.send(result)
        })

    } finally {

    }
}
run().catch(console.dir);

app.listen(port, () => {
})