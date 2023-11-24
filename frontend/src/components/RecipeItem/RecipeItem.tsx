import './RecipeItem.css'
import { IProduct, IDish } from '@types'

export default function RecipeItem(props: IProduct | IDish) {
    return (
        <div className="recipe-item">
            <div className="recipe-item__image-wrapper">
                <img
                    className="recipe-item__image"
                    src={props.imageURL}
                    alt={props.name}
                />
            </div>
            <div className="recipe-item__name">
                {props.name}
            </div>
        </div>
    )
}