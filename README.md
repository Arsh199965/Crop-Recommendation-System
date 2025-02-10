# Crop Recommendation System

## 🌱 Overview

The **Crop Recommendation System** is a machine learning-based web application that suggests the best crop to cultivate based on various environmental factors. This project leverages **Random Forest Classifier** models to provide accurate crop recommendations. The frontend is built with **React.js**, while the backend is powered by **Flask**.

## 🚀 Features

- Predicts the most suitable crop based on:
  - Nitrogen (N), Phosphorus (P), and Potassium (K) levels in soil
  - Temperature and humidity
  - Soil pH level
  - Rainfall
- Interactive frontend with a user-friendly UI.
- API-based architecture to allow easy integration with other platforms.

## 🛠 Tech Stack

### Frontend:

- **React.js** (with Axios for API communication)
- Tailwind CSS for styling

### Backend:

- **Flask** (Python)
- **Scikit-learn, Random Forest** for machine learning
- **Pandas, NumPy** for data processing

## 📦 Installation

### Prerequisites:

- Python 3.8+
- Node.js & npm
- Virtual Environment (Optional but recommended)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/arsh199965/crop-recommendation-system.git
   cd crop-recommendation/backend
   ```
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```
   The server should start at `http://127.0.0.1:5000/`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   The app should be running at `http://localhost:3000/`

## 🔗 API Endpoints

### `POST /predict`

- **Description:** Predicts the best crop based on soil and environmental parameters.
- **Request Body (JSON):**
  ```json
  {
    "N": 50,
    "P": 30,
    "K": 20,
    "temperature": 25.5,
    "humidity": 65,
    "ph": 6.5,
    "rainfall": 200
  }
  ```
- **Response (JSON):**
  ```json
  {
    "recommended_crop": "rice"
  }
  ```

## 🧐 Troubleshooting

### Issue: Backend not responding

- Ensure Flask is running on `http://127.0.0.1:5000/`.
- Check if you installed all dependencies using `pip install -r requirements.txt`.
- Verify that your API request is formatted correctly.

### Issue: No crop displayed after submission

- Open the browser console (`F12` > Console) and check for errors.
- Ensure the API response contains the expected JSON format.
- Verify that the state `recommendedCrop` in React is being updated correctly.

## 🌟 Acknowledgments

- Inspired by **agricultural AI research** to assist farmers.
- Uses open datasets to train the model efficiently.

Feel free to fork, contribute, and improve the system! 🚀

