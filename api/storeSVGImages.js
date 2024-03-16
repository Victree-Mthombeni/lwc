const fs = require('fs');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://localhost:27017/lwc";

async function storeSVGImages() {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db();

        const directoryPath = './brands';

        const files = fs.readdirSync(directoryPath);

        for (const file of files) {
            if (path.extname(file) === '.svg') {
                const filePath = path.join(directoryPath, file);

                const svgData = fs.readFileSync(filePath, 'utf-8');

                const base64Data = Buffer.from(svgData).toString('base64');

                await db.collection('brands').insertOne({ name: file, data: base64Data });
            }
        }

        console.log('SVG images stored in MongoDB successfully');
        client.close();
    } catch (err) {
        console.error('Error storing SVG images:', err);
    }
}

storeSVGImages();
