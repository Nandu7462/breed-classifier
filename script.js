const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const loading = document.getElementById('loading');
const result = document.getElementById('result');
const breedName = document.getElementById('breed-name');
const confidence = document.getElementById('confidence');
const uploadBtn = document.getElementById('upload-btn');
const captureBtn = document.getElementById('capture-btn');

// Drag & Drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); }

['dragenter', 'dragover'].forEach(eventName => {
    uploadArea.addEventListener(eventName, highlight, false);
});
['dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, unhighlight, false);
});
function highlight(e) { uploadArea.classList.add('dragover'); }
function unhighlight(e) { uploadArea.classList.remove('dragover'); }

uploadArea.addEventListener('drop', handleDrop, false);
function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

// Upload button
uploadBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

// Camera capture
captureBtn.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        video.srcObject = stream;
        video.style.display = 'block';
        preview.style.display = 'none';
        setTimeout(() => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0);
            const imageData = canvas.toDataURL('image/jpeg');
            stream.getTracks().forEach(track => track.stop());
            video.style.display = 'none';
            preview.src = imageData;
            preview.style.display = 'block';
            classifyImage(imageData);
        }, 2000);
    } catch (err) {
        alert('Camera access denied or not supported.');
    }
});

function handleFiles(files) {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            preview.style.display = 'block';
            classifyImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

// Simulate API call
async function classifyImage(imageData) {
    loading.style.display = 'block';
    result.style.display = 'none';
    await new Promise(resolve => setTimeout(resolve, 2000));
    const mockBreeds = ['Golden Retriever', 'Labrador Retriever', 'German Shepherd', 'Bulldog', 'Poodle', 'Beagle', 'Rottweiler', 'Yorkshire Terrier', 'Dachshund', 'Boxer'];
    const breed = mockBreeds[Math.floor(Math.random() * mockBreeds.length)];
    const conf = (85 + Math.floor(Math.random() * 15)).toFixed(1);
    breedName.textContent = `Breed: ${breed}`;
    confidence.textContent = `Confidence: ${conf}%`;
    loading.style.display = 'none';
    result.style.display = 'block';
}

// Helper: dataURL to Blob
function dataURLtoBlob(dataURL) {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new Blob([u8arr], {type: mime});
}
