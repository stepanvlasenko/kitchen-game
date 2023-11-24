import { create } from 'zustand'
import { IDish, IProduct, IRecipe } from '@types'
import { dishAPI, productAPI, recipeAPI } from '../ts/api'

interface IDataStore {
    products: IProduct[]
    dishes: IDish[]
    recipes: IRecipe[]
}

const products = await productAPI.getAll()
const dishes = await dishAPI.getAll()
const recipes = await recipeAPI.getAll()


export const useDataStore = create<IDataStore>(() => ({
    products: products,
    dishes: dishes,
    recipes: recipes,
}))