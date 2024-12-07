from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  

model = pickle.load(open('crop_model.pkl', 'rb'))

@app.route('/recommend-crop', methods=['POST'])
def recommend_crop():
    data = request.json
    # Extract features
    features = [
        data['nitrogen'],
        data['phosphorus'],
        data['potassium'],
        data['temperature'],
        data['humidity'],
        data['ph'],
        data['rainfall']
    ]
    # Predict crop
    prediction = model.predict([np.array(features)])
    return jsonify({'recommended_crop': prediction[0]})

if __name__ == '__main__':
    app.run(debug=False)
