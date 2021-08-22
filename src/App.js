import React, {useState, useReducer, useEffect } from 'react'
import { Router, View  } from 'react-navi'
import { mount, route } from 'navi'

import appReducer from './reducers'
import { ThemeContext, StateContext } from './contexts'

import HeaderBar from './pages/HeaderBar'
import HomePage from './pages/HomePage'
import appConfig from './appConfig'
import PostPage from './pages/PostPage'

const routes = mount({
  '/': route({ view: <HomePage />}),
  '/view/:id': route((req) => {return { view: <PostPage id={req.params.id} /> }}),
})

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
        <Router routes={routes}>
          <div style={{ padding: 8 }}>
            <HeaderBar setTheme={setTheme}></HeaderBar>
            <br/>
            <hr/>
            <View />
          </div>
        </Router>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}