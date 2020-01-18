// imports library
import React from 'react'

// imports containers and components
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import ShowFilter from './ShowFilter'
import VisibleTodoList from '../containers/VisibleTodoList'
import About from './About'

// functional component acting as main container for application
const App = () => (
  <div>
    <Header />
    <AddTodo />
    <ShowFilter />
    <VisibleTodoList />
    <About />
  </div>
)

// exports app container
export default App