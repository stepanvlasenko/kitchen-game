import { Outlet } from 'react-router-dom'
import { useUserStore } from './store/userStore'
import Aside from './components/Aside/Aside'

import './App.css'
import { useSessionStore } from './store/sessionStore'
import { useEffect, useState } from 'react'
import { playerAPI } from './ts/api'

export default function App() {
    const userStore = useUserStore()
    const sessionStore = useSessionStore()
    const [updateTrigger, setUpdateTrigger] = useState(false)
    
    useEffect(() => {
        const timer = setInterval(() => {
            setUpdateTrigger(v => !v)
        }, 30000)
        return () => {
            clearInterval(timer)
        }
        
    }, [])

    useEffect(() => {
        if (!userStore.user) {
            return
        }
        playerAPI.update({
            userId: userStore.user.id,
            score: sessionStore.score,
            generatorsId: sessionStore.generatorsId,
            products: sessionStore.products
        })
    }, [updateTrigger])

    return (
        <div className='app'>
            <Aside />
            <main className='app__container'>
                <Outlet />
            </main>
            <div className='app__score'>
                <p className='score__text text--secondary'>{!userStore.user ? 'Авторизуйтесь, чтобы увидеть счёт' : `Счёт: ${sessionStore.score}`}</p>
            </div>
        </div>
    )
}


