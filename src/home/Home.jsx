import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <h1>Home Check List</h1>
      <Link to='/checklist' className= "btn btn-secondary"> ir Check list</Link>
     
    </div>
  )
}

