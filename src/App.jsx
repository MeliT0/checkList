import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { Home } from './home/Home';
import { TodoList } from './todolist/TodoList';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    
      <Route index path='/' element= {<Home/>}/>
      <Route  path='/checklist' element= {<TodoList/>}/>
    
      
    </Routes>
      
  </BrowserRouter>
  </>
  )
}

export default App
