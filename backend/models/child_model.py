from bson.objectid import ObjectId

def create_child(db, data):

    child = {
        "name": data["name"],
        "age": data["age"],
        "gender": data["gender"]
    }

    result = db.children.insert_one(child)

    return str(result.inserted_id)