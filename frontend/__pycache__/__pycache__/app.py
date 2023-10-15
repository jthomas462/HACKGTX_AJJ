from flask import Flask, request

app = Flask(__name__)

@app.route('/api/upload-image', methods = ['POST'])
def upload_image():
    image = request.files['image']
    if image:
        image.save('uploaded_image.jpg')
        return 'Image uploaded and processed successfully'
    else:
        return 'Image upload failed'
    

if __name__ == '__main__':
    app.run(debug=True)