from peewee import *
from databaseModels import db, User, Player, Generator, Product, Dish, Recipe

db.connect()
db.create_tables(models = [User, Player, Generator, Product, Dish, Recipe])

products = [
    {
        'name': 'Помидор',
        'imageURL': 'https://www.svgrepo.com/show/475232/tomato.svg',
        'clicks': 10,
    },
    {
        'name': 'Картошка',
        'imageURL': 'https://www.svgrepo.com/show/398113/potato.svg',
        'clicks': 10,
    },
    {
        'name': 'Молоко',
        'imageURL': 'https://www.svgrepo.com/show/485133/milk-carton.svg',
        'clicks': 10,
    },
    {
        'name': 'Макароны',
        'imageURL': 'https://www.svgrepo.com/show/356678/noodle-macaroni.svg',
        'clicks': 10,
    },
]
print('Creating base fields of products')
for i in range(len(products)):
    _product = Product.create(
        id = i,
        name = products[i]['name'],
        imageURL = products[i]['imageURL'],
        clicks = products[i]['clicks']
    )
    print(_product.id, _product.name)

generators = [
    {
        'productId': 0,
        'name': 'Томатный куст',
        'price': 300,
        'time': 30,
        'imageURL': 'https://freesvg.org/img/1534983463.png',
    },
    {
        'productId': 1,
        'name': 'Куст картошки',
        'price': 300,
        'time': 30,
        'imageURL': 'https://previews.123rf.com/images/fancytapis/fancytapis1802/fancytapis180200024/96129229-potato-plant-with-soil.jpg',
    },
    {
        'productId': 2,
        'name': 'Корова',
        'price': 300,
        'time': 30,
        'imageURL': 'https://howtodrawforkids.com/wp-content/uploads/2020/09/how-to-draw-a-Cow-for-kids.jpg',
    },
    {
        'productId': 0,
        'name': 'Поставщик макарон',
        'price': 300,
        'time': 30,
        'imageURL': 'https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-grain-and-pasta-rgb-color-icon-cookery-logotype-healthy-vector-png-image_46173794.jpg',
    },
]

print('Creating base fields of generators')
for i in range(len(generators)):
    _generator = Generator.create(
        id = i,
        productId = generators[i]['productId'],
        name = generators[i]['name'],
        price = generators[i]['price'],
        time = generators[i]['time'],
        imageURL = generators[i]['imageURL'],
    )
    print(_generator.id, _generator.name)


dishes = [
    {
        'name': 'Картофельные чипсы с томатным соусом',
        'imageURL': 'https://static.vecteezy.com/system/resources/previews/022/534/243/large_2x/tomato-and-potato-chips-icon-over-purple-circle-and-white-background-illustration-free-vector.jpg',
        'price': 30,
    },
    {
        'name': 'Картофельное пюре на молоке',
        'imageURL': 'https://img.freepik.com/premium-vector/potatoes-puree-icon-cartoon-potatoes-puree-vector-icon-web-design-isolated-white-background_98402-48933.jpg',
        'price': 20,
    },
    {
        'name': 'Молочный суп',
        'imageURL': 'https://cdn.stockmediaserver.com/smsimg31/pv/IsignstockContributors/ISS_21575_51654.jpg?token=fJ11W7LPIedgl0a3m6j75QWxK8o9sBRGVT-a6JjUulE&class=pv&smss=52&expires=4102358400',
        'price': 40,
    }
]

print('Creating base fields of dishes')
for i in range(len(dishes)):
    _instance = Dish.create(
        id = i,
        name = dishes[i]['name'],
        imageURL = dishes[i]['imageURL'],
        price = dishes[i]['price'],
    )
    print(_instance.id, _instance.name)

recipes = [
    {
        'product1Id': 0,
        'product2Id': 1,
        'dishId': 0,
    },
    {
        'product1Id': 1,
        'product2Id': 2,
        'dishId': 1,
    },
    {
        'product1Id': 2,
        'product2Id': 3,
        'dishId': 2,
    }
]

print('Creating base fields of recipes')
for i in range(len(recipes)):
    _instance = Recipe.create(
        id = i,
        product1Id = recipes[i]['product1Id'],
        product2Id = recipes[i]['product2Id'],
        dishId = recipes[i]['dishId'],
    )
    print(_instance.id, _instance.dishId)