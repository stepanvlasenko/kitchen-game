import { IDish, IGenerator, IPlayer, IProduct, IRecipe, IUser } from '@types'
import { $fetch } from 'ofetch'

const serverURL = 'http://127.0.0.1:1111'

export const userAPI = {
    getAll: async () => {
        const responce = await $fetch<IUser[]>(`${serverURL}/users`, {
            method: 'GET',
        })
        console.log(responce)
        return responce
    }
}

export const productAPI = {
    getAll: async () => {
        const responce = await $fetch<IProduct[]>(`${serverURL}/products`, {
            method: 'GET',
        })
        return responce
    }
}

export const dishAPI = {
    getAll: async () => {
        const responce = await $fetch<IDish[]>(`${serverURL}/dishes`, {
            method: 'GET',
        })
        return responce
    }
}

export const generatorAPI = {
    getAll: async () => {
        const responce = await $fetch<IGenerator[]>(`${serverURL}/products`, {
            method: 'GET',
        })
        return responce
    }
}

export const recipeAPI = {
    getAll: async () => {
        const responce = await $fetch<IRecipe[]>(`${serverURL}/recipes`, {
            method: 'GET',
        })
        return responce
    }
}

export const playerAPI = {
    getAll: async () => {
        const responce = await $fetch<IPlayer[]>(`${serverURL}/players`, {
            method: 'GET',
        })
        return responce
    },
    get: async (userId: number) => {
        const responce = await $fetch<IPlayer>(`${serverURL}/player`, {
            method: 'GET',
            params: {
                userId: userId,
            }
        })
        return responce
    },
    update: async (data: IPlayer) => {
        const responce = await $fetch<IPlayer>(`${serverURL}/player`, {
            method: 'PUT',
            body: data,
        })
        return responce
    }
}