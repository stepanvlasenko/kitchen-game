import { create } from 'zustand'
import { IUser } from '@types'

interface IUserStore {
    user: IUser | null
    setUser: (user: IUser) => void
}

export const useUserStore = create<IUserStore>((set) => ({
    user: null,
    setUser: (user) => {
        set(() => ({ user: user }))
    }
}))