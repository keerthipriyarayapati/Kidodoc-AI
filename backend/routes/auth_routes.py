from flask import Blueprint, request
import bcrypt
from models.user_model import create_user

auth_bp = Blueprint("auth_bp", __name__)

db = None


@auth_bp.route("/signup", methods=["POST"])
def signup():

    data = request.json

    user_id = create_user(db, data)

    if not user_id:
        return {
            "message": "Email already exists"
        }, 400

    return {
        "message": "User created successfully"
    }


@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    user = db.users.find_one({
        "email": data["email"]
    })

    if not user:

        return {
            "message": "User not found"
        }, 404

    password_match = bcrypt.checkpw(
        data["password"].encode("utf-8"),
        user["password"]
    )

    if not password_match:

        return {
            "message": "Invalid password"
        }, 401

    return {
        "message": "Login successful"
    }