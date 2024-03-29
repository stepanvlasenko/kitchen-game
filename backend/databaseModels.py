from peewee import *
from playhouse.sqlite_ext import JSONField

db = SqliteDatabase('./backend/dev.db')

class BaseModel(Model):
    class Meta:
        database = db

# Can be generated by User
class User(BaseModel):
    email = CharField()
    password = CharField()
    nickname = CharField()

class Player(BaseModel):
    userId = IntegerField()
    score = IntegerField()
    generatorsId = JSONField()
    products = JSONField()

# Cannot be generated by User
class Generator(BaseModel):
    id = IntegerField()
    productId = IntegerField()
    price = IntegerField()
    time = IntegerField()
    name = CharField()
    imageURL = CharField()

class Product(BaseModel):
    id = IntegerField()
    name = CharField()
    clicks = IntegerField()
    imageURL = CharField()

class Dish(BaseModel):
    id = IntegerField()
    name = CharField()
    imageURL = CharField()
    price = IntegerField()

class Recipe(BaseModel):
    product1Id = IntegerField()
    product2Id = IntegerField()
    dishId = IntegerField()