from datetime import datetime

def save_prediction(db, data):

    prediction = {
        "child_name": data["child_name"],
        "age": data["age"],
        "gender": data["gender"],
        "symptoms": data["symptoms"],
        "predicted_disease": data["predicted_disease"],
        "created_at": datetime.utcnow()
    }

    result = db.predictions.insert_one(prediction)

    return str(result.inserted_id)