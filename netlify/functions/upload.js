const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'Europe (Stockholm) eu-north-1',
});

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

    const { fileName, fileContent, fileType } = JSON.parse(event.body);
    // Check file size on the backend as an additional security measure
    const maxSize = 100 * 1024 * 1024; // 5 MB
    if (buffer.length > maxSize) {
    return { 
        statusCode: 400, 
        body: JSON.stringify({ error: 'File size exceeds the maximum limit of 5 MB.' }) 
    };
    }
    // Decode base64
    const isBase64 = fileContent.startsWith('data:');
    const base64Content = isBase64 ? fileContent.split(';base64,').pop() : fileContent;
    const buffer = Buffer.from(base64Content, 'base64');

    const params = {
    Bucket: 'z2c-workshop',
    Key: fileName,
    Body: buffer,
    ContentType: fileType, // Use the fileType sent from the client
    ACL: 'public-read',
    };

    try {
    await s3.upload(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'File uploaded successfully' }),
    };
    } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};
