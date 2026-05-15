from flask import Blueprint, request
from models.child_model import create_child

child_bp = Blueprint("child_bp", __name__)

db = None

@child_bp.route("/add_child", methods=["POST"])
def add_child():
    data = request.json

    child_id = create_child(db, data)

    return {
        "message": "Child added successfully",
        "child_id": child_id
    }