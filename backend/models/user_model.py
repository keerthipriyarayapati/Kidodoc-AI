import bcrypt

def create_user(db, data):

    existing_user = db.users.find_one({
        "email": data["email"]
    })

    if existing_user:

        return None

    hashed_password = bcrypt.hashpw(
        data["password"].encode("utf-8"),
        bcrypt.gensalt()
    )

    user = {
        "email": data["email"],
        "password": hashed_password
    }

    result = db.users.insert_one(user)

    return str(result.inserted_id)