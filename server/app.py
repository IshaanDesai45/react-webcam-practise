from flask import Flask,request,jsonify
from flask_cors import CORS
import base64
import re
app = Flask(__name__)
CORS(app)


@app.route("/",methods=["POST"])
def getpost():
    data = request.json
    imgdata = base64.b64decode(re.sub("data:image/jpeg;base64,", '', str(data['image'])))
    filename = 'uploads/some_image2.jpg'  # I assume you have a way of picking unique filenames
    with open(filename, 'wb') as f:
        f.write(imgdata)
    return jsonify({'message':'successful'})
