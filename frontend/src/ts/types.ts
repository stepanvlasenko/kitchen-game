export interface IUser {
    id: number
    email: string
    nickname: string
}

export interface IPlayer {
    userId: number
    score: number
    generatorsId: number[]
    products: IPlayerProduct[]
}

export interface IPlayerProduct {
    productId: number
    count: number
}

export interface IProduct {
    id: number
    name: string
    clicks: number
    imageURL: string
}

export interface IDish {
    id: number
    name: string
    imageURL: string
    price: number
}

export interface IGenerator {
    id: number
    productId: number
    name: string
    imageURL: string
    price: number
    time: number
}

export interface IRecipe {
    product1Id: number
    product2Id: number
    dishId: number
}
