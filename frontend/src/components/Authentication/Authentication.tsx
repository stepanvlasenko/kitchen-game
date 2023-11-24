import { useRef, useState } from 'react'
import './Authentication.css'
import { $fetch } from 'ofetch'
import { useUserStore } from '../../store/userStore'
import { IUser } from '@types'
import { useSessionStore } from '../../store/sessionStore'
import { playerAPI } from '../../ts/api'

type buttonEventHandler = React.MouseEventHandler<HTMLButtonElement>

export default function Authentication() {
    const [isRegistrarion, setIsRegistartion] = useState(false)
    const userStore = useUserStore()
    const sessionStore = useSessionStore()
    
    const form = useRef<HTMLFormElement>(null)

    const handleRegistration: buttonEventHandler = async (event) => {
        event.preventDefault()

        if (!form.current) return

        const formData = new FormData(form.current)
        const data = Object.fromEntries(formData.entries())
        if (!data.email || !data.password || !data.nickname) {
            alert('Вы заполнили не все поля.')
            return
        }

        const responce = await $fetch('http://127.0.0.1:1111/registration', {
            method: 'POST',
            body: data,
        })
        
        if (responce.status == false) {
            alert(responce.data)
            return
        }
        userStore.setUser(responce.data as IUser)
        sessionStore.updateAll(await playerAPI.get((responce.data as IUser).id))
    }

    const registration = (
        <form ref={form} className='authentication__form'>
            <div className='form__item'>
                <div className='form__label'>Электронная почта</div>
                <input className='form__input' type="text" placeholder="Электронная почта" name="email"/>
            </div>
            <div className='form__item'>
                <div className='form__label'>Пароль</div>
                <input className='form__input' type="password" placeholder="Пароль" name="password"/>
            </div>
            <div className='form__item'>
                <div className='form__label'>Никнейм</div>
                <input className='form__input' type="text" placeholder="Никнейм" name="nickname"/>
            </div>
            <button className='authentication__button' onClick={handleRegistration}>Подтвердить</button>
        </form>
    )

    const handleAuthentication: buttonEventHandler = async (event) => {
        event.preventDefault()

        if (!form.current) return

        const formData = new FormData(form.current)
        const data = Object.fromEntries(formData.entries())
        if (!data.email || !data.password) {
            alert('Вы заполнили не все поля.')
            return
        }

        const responce = await $fetch('http://127.0.0.1:1111/authentication', {
            method: 'GET',
            params: {
                email: data.email,
                password: data.password
            }
        })
        
        if (responce.status == false) {
            alert(responce.data)
            return
        }   
        userStore.setUser(responce.data as IUser)
        sessionStore.updateAll(await playerAPI.get((responce.data as IUser).id))
    }

    const authentication = (
        <form ref={form} className='authentication__form'>
            <div className='form__item'>
                <div className='form__label'>Электронная почта</div>
                <input className='form__input' type="text" placeholder="Электронная почта" name="email"/>
            </div>
            <div className='form__item'>
                <div className='form__label'>Пароль</div>
                <input className='form__input' type="password" placeholder="Пароль" name="password"/>
            </div>
            <button className='authentication__button' onClick={handleAuthentication}>Подтвердить</button>
        </form>
    )

    const content = isRegistrarion ? registration : authentication

    return (
        <div className='authentication'>
            <button className='authentication__button' onClick={() => setIsRegistartion(v => !v)}>{isRegistrarion ? 'Авторизоваться' : 'Зарегистрироваться'}</button>
            <div className='authentication__title'>{isRegistrarion ? 'Регистрация' : 'Авторизация'}</div>
            {content}
        </div>
    )
}