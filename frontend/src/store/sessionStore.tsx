import { create } from 'zustand'
import { IPlayer, IPlayerProduct } from '@types'

interface ISessionStore {
    score: number | 0
    setScore: (score: number) => void
    products: IPlayerProduct[] | []
    setProducts: (products: IPlayerProduct[]) => void
    generatorsId: number[] | []
    setGeneratorsId: (generators: number[]) => void
    updateAll: (data: IPlayer) => void
}

export const useSessionStore = create<ISessionStore>((set) => ({
    score: 0,
    setScore: (score) => set(() => {
        return { score: score }
    }),

    // products: dataStore.products.map((v) => ({
    //     productId: v.id,
    //     count: 0
    // })),
    products: [],
    setProducts: (products) => set(() => {
        return { products: products }
    }),

    generatorsId: [],
    setGeneratorsId: (generatorsId) => set(() => {
        return { generatorsId: generatorsId }
    }),

    updateAll: (data) => set(() => {
        return {
            score: data.score,
            products: data.products,
            generators: data.generatorsId,
        }
    })
}))