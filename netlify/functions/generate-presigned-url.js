// netlify/functions/generate-presigned-url.js
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  region: 'Europe (Paris) eu-west-3',
  signatureVersion: 'v4',
});

exports.handler = async (event) => {
  const { fileName, fileType } = JSON.parse(event.body); // Extract fileName and fileType  const objectKey = `uploads/${fileName}`; // Example: uploads/my-uploaded-file.jpg

  const params = {
    Bucket: 'z2c-files',
    Key: fileName, // Define how you want to name your files
    Expires: 180, // Link expiration time in seconds
    ContentType: fileType,
    ACL: 'public-read',
  };

  try {
    const url = await s3.getSignedUrlPromise('putObject', params);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://vilasinits.github.io/z2c-workshop/", // Adjust according to your CORS policy
      },
      body: JSON.stringify({ url }),
    };
  } catch (error) {
    console.error('Error generating pre-signed URL:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Error generating URL' }) };
  }
};
