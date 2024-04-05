document.addEventListener('DOMContentLoaded', function() {
    const allowedEmail = 'tsvilasini97@gmail.com'; // Change this to the allowed email
    const loginButton = document.getElementById('login-button');
    const uploadArea = document.getElementById('upload-area');
  
    if (window.netlifyIdentity) {
      window.netlifyIdentity.init();
  
      loginButton.addEventListener('click', () => {
        window.netlifyIdentity.open();
      });
  
      window.netlifyIdentity.on('login', (user) => {
        if (user.email === allowedEmail) {
          uploadArea.style.display = 'block';
        } else {
          window.netlifyIdentity.logout();
          alert('Access is restricted.');
        }
      });
  
      window.netlifyIdentity.on('logout', () => {
        uploadArea.style.display = 'none';
      });
    }
  });
  
  async function uploadFile() {
    const fileInput = document.getElementById('file-input');
    if (!fileInput.files.length) {
        alert('Please select a file.');
        return;
    }
    
    const file = fileInput.files[0];
    const maxSize = 100 * 1024 * 1024; // For example, 5 MB

    // Check if the file size exceeds the maximum size
    if (file.size > maxSize) {
    alert('File size exceeds the maximum limit of 5 MB.');
    return;
    }
    // const file = fileInput.files[0];
    const title = document.getElementById('link-text').value || 'Untitled';
    const reader = new FileReader();
  
    reader.onload = async (e) => {
      const content = e.target.result;
      const response = await fetch('/.netlify/functions/upload', {
        method: 'POST',
        body: JSON.stringify({
          fileName: file.name,
          fileContent: content,
          fileType: file.type,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const uploadedLinks = document.getElementById('uploaded-links');
        uploadedLinks.innerHTML += `<a href="${content}" target="_blank">${title}</a><br>`;
      } else {
        alert('Upload failed');
      }
    };
  
    reader.readAsDataURL(file);
  }
  