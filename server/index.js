const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "https://heritagenestbd.netlify.app",
        ]
    })
);

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
        const propertiesCollection = client.db("heritagenest").collection('properties');
        const bidsCollection = client.db("heritagenest").collection('bids');

        app.get('/', (req, res) => {
            res.send("Heritage Nest server is running...")
        })

        // Get all properties data
        app.get('/properties', async (req, res) => {
            const result = await propertiesCollection.find().toArray();
            res.send(result)
        })

        // Get a single properties detaild data
        app.get('/details/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await propertiesCollection.findOne(query);
            res.send(result)
        })

        // Post a new bid in db
        app.post('/bid', async (req, res) => {
            const data = req.body;
            const result = await bidsCollection.insertOne(data);
            res.send(result)
        })

        // Get bids by email
        app.get('/bids/:email', async (req, res) => {
            const email = req.params.email;
            const result = await bidsCollection.find({ userEmail: email }).toArray();
            res.send(result)
        })

        // Get a single properties detaild data
        app.delete('/bid/:id', async (req, res) => {
            const id = req.params.id;
            const query = { propertiesId: id }
            const result = await bidsCollection.deleteOne(query);
            res.send(result)
        })

    } finally {

    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log("Heritage Nest Server is running on port : ", port);
})