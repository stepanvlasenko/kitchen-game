import { Link } from 'react-router-dom'
import { useUserStore } from '../../store/userStore'
import Authentication from '../Authentication/Authentication'
import './Aside.css'

export default function Aside() {
    const userStore = useUserStore()
    const isAuthenticated = userStore.user != null

    const navigation = (<nav className="navigation">
                            <div className="navigation__item text--secondary"><Link to='/products'>Продукты</Link></div>
                            <div className="navigation__item text--secondary"><Link to='/recipes'>Рецепты</Link></div>
                            <div className="navigation__item text--secondary"><Link to='/rating'>Рейтинг</Link></div>
                        </nav>)

    const content = isAuthenticated ? navigation : <Authentication />
    return (
        <aside className="aside">
            <div className="header">
                <img className="header__logo" src="/frontend/public/logo.svg" />
                <div className="header__title text--secondary">Cooking clicker</div>
            </div>
            {content}
        </aside>
    )
}