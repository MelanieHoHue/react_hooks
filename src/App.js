import React, {useState, useReducer, useEffect } from 'react'
import { useResource } from 'react-request-hook'

import appReducer from './reducers'
import { ThemeContext, StateContext } from './contexts'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import Header from './Header'
import ChangeTheme from './ChangeTheme'

const appConfig = {
  title: 'React Hooks Blog'
}

export default function App () {
  const [ theme, setTheme ] = useState({ 
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: [], error: '' })
  const { user, error } = state

  const [ posts, getPosts ] = useResource(() => ({
    url: '/posts/',
    method: 'get'
  }))
  
  useEffect(getPosts, [])

  useEffect(() => {
    if (posts && posts.error) {
      dispatch({ type: 'POSTS_ERROR'})
    }
    if (posts && posts.data) {
      dispatch({ type: 'FETCH_POSTS', posts: posts.data.reverse() })
    }
  }, [posts])

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
          <Header text={appConfig.title} />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br/>
          <React.Suspense fallback={"Loading ..."}>
            <UserBar />
          </React.Suspense>
          <br />
          {user && <CreatePost />}
          <br/>
          <hr/>
          {error && <b>{error}</b>}
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}