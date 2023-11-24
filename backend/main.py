from flask import Flask, request
from flask_cors import CORS

from databaseModels import db, User, Player, Generator, Product, Dish, Recipe
from playhouse.shortcuts import model_to_dict, update_model_from_dict
def createResponce(status: bool, data):
    return {
        'status': status,
        'data': data
    }

app = Flask(__name__)
CORS(app)

def registration(data):
    db.connect()
    user = User.get_or_none(User.email == data['email'])
    if (user != None):
        db.close()
        return createResponce(False, 'Пользователь с такой электронной почтой уже существует')
    user = User.create(**data)
    player = Player.create(**{
        "userId": user.id,
        "score": 0,
        "generatorsId": [],
        "products": list(map(lambda x: {'productId': x['id'], 'count': 0}, list(map(model_to_dict, Product.select())))),
    })
    db.close()
    temp = model_to_dict(user).copy()
    temp.pop("password")

    return createResponce(True, temp)

def authentication(email: str, password: str):
    db.connect()
    user = User.get_or_none(User.email == email)
    db.close()
    if user == None: return createResponce(False, 'Пользователь с указанной электронной почтой не найден.')
    if user.password != password: return createResponce(False, 'Пароль указан неверно.')
    temp = model_to_dict(user).copy()
    temp.pop("password")

    return createResponce(True, temp)

def getAll(model: User | Player | Product | Dish | Generator | Recipe):
    db.connect()
    if model == User:
        responce = []
        for inst in model.select():
            temp = model_to_dict(inst).copy()
            temp.pop('password')
            responce.append(temp)
        db.close()
        return responce
    responce = list(map(model_to_dict, model.select()))
    db.close()
    return responce

def updatePlayer(data):
    db.connect()
    instance = Player.get(Player.userId == data['userId'])
    update_model_from_dict(instance, data)
    instance.save()
    print(model_to_dict(instance))
    db.close()
    return model_to_dict(instance)

def getPlayer(userId: int):
    db.connect()
    instance = Player.get(Player.userId == userId)
    db.close()
    return model_to_dict(instance)

@app.get('/')
def apiBase():
    return f'Successfully work on url {request.base_url}'

@app.post('/registration')
def apiRegistration():
    data = request.json
    return registration(data)

@app.get('/authentication')
def apiAuthentication():
    data = request.args
    return authentication(data['email'], data['password'])

@app.get('/users')
def apiGetUsers():
    return getAll(User)

@app.get('/players')
def apiGetPlayers():
    return getAll(Player)

@app.get('/products')
def apiGetProducts():
    return getAll(Product)

@app.get('/dishes')
def apiGetDishes():
    return getAll(Dish)

@app.get('/generators')
def apiGetGenerators():
    return getAll(Generator)

@app.get('/recipes')
def apiGetRecipes():
    return getAll(Recipe)

@app.put('/player')
def apiUpdatePlayer():
    data = request.json
    return updatePlayer(data)

@app.get('/player')
def apiGetPlayer():
    userId = request.args['userId']
    return getPlayer(userId)

app.run(debug=True)