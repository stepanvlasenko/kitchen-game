import { IRecipe } from '@types'
import './Recipe.css'
import RecipeItem from '../RecipeItem/RecipeItem'
import { useDataStore } from '../../store/dataStore'
import { useSessionStore } from '../../store/sessionStore'

type buttonEventHandler = React.MouseEventHandler<HTMLButtonElement>

export default function Recipe(props: IRecipe) {
    const dataStore = useDataStore()
    const sessionStore = useSessionStore()
    const product1 = dataStore.products.find(v => v.id === props.product1Id)
    const product2 = dataStore.products.find(v => v.id === props.product2Id)
    const dish = dataStore.dishes.find(v => v.id === props.dishId)

    const handleSubmit: buttonEventHandler = (event) => {
        event.preventDefault()
        const sessionProduct1 = sessionStore.products.find(v => (v.productId === props.product1Id))!
        const sessionProduct2 = sessionStore.products.find(v => (v.productId === props.product2Id))!

        if (sessionProduct1?.count <= 0) {
            alert('У вас не хватает первого продукта')
            return
        }
        if (sessionProduct2?.count <= 0) {
            alert('У вас не хватает второго продукта')
            return
        }
        sessionProduct1.count -= 1
        sessionProduct2.count -= 1

        const price = dataStore.dishes.find(v => v.id === props.dishId)!.price
        sessionStore.setScore(sessionStore.score + price)
    }
    
    return (
        <div className='recipe'>
            <div className='recipe-calculator'>
                <RecipeItem {...product1!}/>
                <img className='recipe-calculator__operations' src="/frontend/public/plus.svg" alt="plus" />
                <RecipeItem {...product2!}/>
                <img className='recipe-calculator__operations' src="/frontend/public/logo.svg" alt="equals" />
                <RecipeItem {...dish!}/>
            </div>
            <button className='recipe__button' onClick={handleSubmit}>Продать за {dish?.price}</button>
        </div>
    )
}