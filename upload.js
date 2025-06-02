// upload.js

function sendImageToZapier(file) {
  const formData = new FormData();
  formData.append('image', file);

  fetch('https://hooks.zapier.com/hooks/catch/22963341/2vrzzsi/', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert("✅ Image sent successfully!");
    } else {
      throw new Error("Zapier webhook responded with error");
    }
  })
  .catch(error => {
    alert("שגיאה בשליחת התמונה");
    console.error("Upload error:", error);
  });
}
