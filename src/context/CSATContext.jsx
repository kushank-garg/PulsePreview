import { createContext, useContext, useReducer } from 'react'
import initialState from './initialState'

const CSATContext = createContext()

// this handles every possible update in one place
// took me a while to figure out the options array stuff
function reducer(state, action) {
  switch (action.type) {

    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value }

    case 'ADD_OPTION':
      return { ...state, options: [...state.options, 'New option'] }

    case 'DELETE_OPTION':
      return {
        ...state,
        options: state.options.filter((_, i) => i !== action.index)
      }

    case 'UPDATE_OPTION':
      return {
        ...state,
        options: state.options.map((opt, i) =>
          i === action.index ? action.value : opt
        )
      }

    default:
      return state
  }
}

export function CSATProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CSATContext.Provider value={{ state, dispatch }}>
      {children}
    </CSATContext.Provider>
  )
}

// custom hook so we dont have to import useContext everywhere
export function useCSAT() {
  return useContext(CSATContext)
}