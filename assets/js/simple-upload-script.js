// simple-upload-script.js
async function uploadToS3() {
    const file = document.getElementById('file-input').files[0];
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    // const fileName = file.name; 
    // const fileType = file.type;

    // Fetch pre-signed URL from your Netlify function
    const presignedUrlResponse = await fetch('/.netlify/functions/generate-presigned-url', {
        method: 'POST', // Ensure method is POST to send data
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: fileName,
          fileType: fileType,
        }),
      });

    if (!presignedUrlResponse.ok) {
        alert('Failed to get the upload URL.');
        console.error('Response error:', await presignedUrlResponse.text());
        return;
      }
    const { url } = await presignedUrlResponse.json();
  
    // Perform the upload
    const uploadResponse = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': fileType, // Use the file's actual MIME type
        },
        body: file,
      });
  
    if (uploadResponse.ok) {
        alert('Upload successful.');
  
        // Construct the file URL and display it
        const fileUrl = `https://${z2c-files}.s3.amazonaws.com/${fileName}`;
        document.getElementById('uploaded-links').innerHTML += `<a href="${fileUrl}" target="_blank">${fileName}</a><br>`;
      } else {
        alert('Upload failed.');
        console.error('Upload error:', await uploadResponse.text());
      }
  }
  