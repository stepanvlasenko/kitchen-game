import Recipe from '../../components/Recipe/Recipe'
import { useDataStore } from '../../store/dataStore'
import './Recipes.css'


export default function Recipes() {
    const dataStore = useDataStore()

    const elements = dataStore.recipes.map((v, i) => <Recipe key={i} {...v}/>)
    
    return (
        <div className='recipes'>
            {elements}
        </div>
    )
}