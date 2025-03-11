import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <br/>
            <Link to="/survey/1">Questionnaire</Link>
        </nav>
    )
}

export default Header