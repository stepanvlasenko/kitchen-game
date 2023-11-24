import { IProduct } from '@types'
import './Product.css'
import { useEffect, useState } from 'react'
import { useSessionStore } from '../../store/sessionStore'

export default function Product(props: IProduct) {
    const sessionStore = useSessionStore()
    const [clicked, setClicked] = useState(0)
    useEffect(() => {
        if (clicked >= props.clicks) {
            setClicked(0)
            const index = sessionStore.products.findIndex((v) => v.productId === props.id)
            sessionStore.products[index].count += 1
            sessionStore.setProducts(sessionStore.products)
        }
    }, [clicked])

    return (
        <div className='product'>
            <img className='product__image' src={props.imageURL} alt={props.name} />
            <div className='product__content'>
                <div className='product__text'>
                    <p className='product__title text--secondary'>{props.name}</p>
                    <p className='product__title text--secondary'>{sessionStore.products.find((v) => v.productId === props.id)?.count}</p>
                </div>
                <button className='product__title product__button' onClick={() => setClicked(v => v + 1)}>{clicked} / {props.clicks}</button>
            </div>
        </div>
    )
}