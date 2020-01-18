// imports library
import React from 'react'

// imports container and action
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

// functional component using an action to control which to dos to display
const ShowFilter = () => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
)

// exports showFilter component
export default ShowFilter