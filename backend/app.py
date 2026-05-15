from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo import MongoClient

from config import Config

from routes.child_routes import child_bp
import routes.child_routes as child_routes

from routes.prediction_routes import prediction_bp
import routes.prediction_routes as prediction_routes

from routes.auth_routes import auth_bp
import routes.auth_routes as auth_routes

from routes.report_routes import report_bp

from models.prediction_model import save_prediction

import pickle
import pandas as pd

app = Flask(__name__)

CORS(app)

load_dotenv()


client = MongoClient(
    Config.MONGO_URI,
    tls=True,
    tlsAllowInvalidCertificates=True,
    serverSelectionTimeoutMS=5000
)

try:

    client.admin.command("ping")

    print("MongoDB Connected")

    db = client["kidodoc"]

except Exception as e:

    print(e)

    db = None


child_routes.db = db
prediction_routes.db = db
auth_routes.db = db


model = pickle.load(open("model.pkl", "rb"))
encoder = pickle.load(open("encoder.pkl", "rb"))


training_data = pd.read_csv("../datasets/Training.csv")

training_data = training_data.drop(
    columns=["Unnamed: 133"],
    errors="ignore"
)

symptom_columns = training_data.drop(
    "prognosis",
    axis=1
).columns


@app.route("/")
def home():

    return {
        "message": "KidoDoc Backend Running Successfully"
    }


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    symptoms = data["symptoms"]

    input_data = [0] * len(symptom_columns)

    for symptom in symptoms:

        symptom = symptom.strip()

        if symptom in symptom_columns:

            index = list(symptom_columns).index(symptom)

            input_data[index] = 1

    prediction = model.predict([input_data])

    disease = encoder.inverse_transform(prediction)[0]

    save_prediction(
        db,
        {
            "child_name": data.get("child_name"),
            "age": data.get("age"),
            "gender": data.get("gender"),
            "symptoms": symptoms,
            "predicted_disease": disease
        }
    )

    return {
        "predicted_disease": disease
    }


@app.route("/test_db")
def test_db():

    db.test.insert_one({
        "message": "MongoDB Connected"
    })

    return {
        "message": "Data inserted successfully"
    }


app.register_blueprint(child_bp)
app.register_blueprint(prediction_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(report_bp)


if __name__ == "__main__":

    app.run(debug=True)