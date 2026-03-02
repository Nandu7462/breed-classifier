# 🐕 Dog Breed Classifier

An AI-powered web application for dog breed classification with a modern, user-friendly interface.

## Features

✨ **Image Upload**: Click to upload image files
🎥 **Camera Capture**: Capture images directly from your device camera
📤 **Drag & Drop**: Drag and drop images directly onto the upload area
🤖 **AI Classification**: Get instant breed predictions with confidence scores
📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
🎨 **Modern UI**: Beautiful gradient-based interface with smooth animations

## Project Structure

```
breed-classifier/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # JavaScript logic and classification
└── README.md       # Documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Camera access (for capture feature)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nandu7462/breed-classifier.git
cd breed-classifier
```

2. Open `index.html` in your browser or serve it using a local server:
```bash
python -m http.server 8000
# Then visit: http://localhost:8000
```

## Usage

1. **Upload an Image**:
   - Click the "Upload Image" button
   - Select an image file from your computer

2. **Capture from Camera**:
   - Click the "Capture from Camera" button
   - Allow camera access when prompted
   - The camera will auto-capture after 2 seconds

3. **Drag & Drop**:
   - Drag an image file and drop it on the upload area
   - The image will be automatically processed

4. **View Results**:
   - Image preview appears after upload
   - Breed classification with confidence score displays below

## Features Details

### Image Classification
The application simulates breed classification with mock results. To integrate with a real ML model:

- **TensorFlow.js**: For client-side inference using pre-trained models
- **Backend API**: Send images to a server running TensorFlow, PyTorch, or similar
- **Replace**: Modify the `classifyImage()` function in `script.js`

### Supported Formats
- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- GIF (.gif)

## Browser Compatibility

✅ Chrome/Chromium 88+
✅ Firefox 87+
✅ Safari 14+
✅ Edge 88+

## Integration with ML Models

### Option 1: TensorFlow.js (Client-side)
```javascript
// Load a pre-trained model
const model = await tf.loadLayersModel('path/to/model.json');
const predictions = model.predict(imageData);
```

### Option 2: Flask Backend
```python
# Backend endpoint
from flask import Flask, request
app = Flask(__name__)

@app.route('/classify', methods=['POST'])
def classify():
    image = request.files['image']
    predictions = model.predict(image)
    return {'breed': breed_name, 'confidence': confidence_score}
```

### Option 3: REST API
Replace the mock classification with API call:
```javascript
const response = await fetch('/api/classify', {
  method: 'POST',
  body: formData
});
const data = await response.json();
```

## Development

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Gradient backgrounds, animations, responsive design
- **JavaScript (ES6+)**: Async/await, File API, Canvas API
- **Media Devices API**: Camera access

### Key Functions
- `handleFiles()`: Process uploaded image files
- `classifyImage()`: Send image for classification
- `captureFromCamera()`: Access device camera
- `dataURLtoBlob()`: Convert image data for API transmission

## Deployment

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select main branch as source
3. Access at: `https://Nandu7462.github.io/breed-classifier`

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel
```bash
npm install -g vercel
vercel
```

## Future Enhancements

- [ ] Support for multiple breed detection
- [ ] Breed characteristics and temperament display
- [ ] Comparison with multiple breeds
- [ ] Image history/saved results
- [ ] Mobile app version (React Native/Flutter)
- [ ] Real-time webcam feed classification
- [ ] Multilingual support

## Performance Considerations

- Images are validated before processing
- Canvas resizing for optimal model input
- Loading states for better UX
- Efficient DOM manipulation

## Troubleshooting

### Camera not working?
- Ensure HTTPS or localhost is used
- Check browser permissions
- Verify camera availability

### Images not uploading?
- Check file size (recommended < 5MB)
- Verify file format (JPEG, PNG, WebP, GIF)
- Try drag & drop as alternative

### Results not appearing?
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify API endpoint is responding

## License

MIT License - feel free to use this project for personal and commercial purposes.

## Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit a pull request

## Support

If you encounter any issues, please open a GitHub issue or contact the maintainer.

---

**Made with ❤️ by Nandu7462**
