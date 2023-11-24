import './Products.css'
import { useDataStore } from '../../store/dataStore'
import Product from '../../components/Product/Product'

export default function Products() {
    const dataStore = useDataStore()
    const elements = dataStore.products.map((v) => (
        <Product key={v.id} id={v.id} name={v.name} clicks={v.clicks} imageURL={v.imageURL}/>
    ))

    return (
        <div className='products'>
            {elements}
        </div>
    )
}