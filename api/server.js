const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const uri = "mongodb://localhost:27017/lwc";

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB");
        const db = client.db();

        app.get('/api/images', async (req, res) => {
            try {
                const images = await db.collection('brands').find().toArray();
                res.json(images);
            } catch (err) {
                console.error("Error retrieving images:", err);
                res.status(500).json({ error: "Failed to retrieve images" });
            }
        });
    })
    .catch(err => console.error("Failed to connect to MongoDB:", err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
