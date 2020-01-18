// imports library
import React from 'react'

// imports containers and components
import AddTodo from '../containers/AddTodo'
import ShowFilter from './ShowFilter'
import VisibleTodoList from '../containers/VisibleTodoList'

// functional component acting as main container for application
const App = () => (
  <div>
    <AddTodo />
    <ShowFilter />
    <VisibleTodoList />
  </div>
)

// exports app container
export default App