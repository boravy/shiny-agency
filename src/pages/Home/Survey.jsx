import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Survey() {
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <Link to="client">Questionnaire Client</Link>
      <br />
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
    </div>
  )
}
export default Survey