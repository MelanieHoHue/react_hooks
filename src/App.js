import React, {useState, useReducer, useEffect } from 'react'

import appReducer from './reducers'
import { ThemeContext, StateContext } from './contexts'

import HeaderBar from './pages/HeaderBar'
import PostPage from './pages/PostPage'
import appConfig from './appConfig'


export default function App () {
  const [ theme, setTheme ] = useState({ 
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: [], error: '' })
  const { user, error } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - ${appConfig.title}`
    } else {
      document.title = appConfig.title
    }
  }, [user])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <HeaderBar setTheme={setTheme}></HeaderBar>
          <br/>
          <hr/>
          <PostPage id={'react-hooks'}/>
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}