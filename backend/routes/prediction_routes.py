from flask import Blueprint

prediction_bp = Blueprint(
    "prediction_bp",
    __name__
)

db = None

@prediction_bp.route("/prediction_history")
def prediction_history():

    predictions = list(
        db.predictions.find(
            {},
            {
                "_id": 0
            }
        )
    )

    return predictions