import React, {useState, useReducer, useEffect } from 'react'

import appReducer from './reducers'
import { ThemeContext } from './contexts'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import Header from './Header'
import ChangeTheme from './ChangeTheme'

const appConfig = {
  title: 'React Hooks Blog'
}

const defaultPosts = [{
  title: 'Post1',
  content: 'bla',
  author: 'me'
}, {
  title: 'Post2',
  content: 'bla',
  author: 'me'
}]

export default function App () {
  const [ theme, setTheme ] = useState({ 
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - ${appConfig.title}`
    } else {
      document.title = appConfig.title
    }
  }, [user])

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 8 }}>
        <Header text={appConfig.title} />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <br/>
        <UserBar user={user} dispatch={dispatch}/>
        <br />
        {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
        <br/>
        <hr/>
        <PostList posts={posts} />
      </div>
    </ThemeContext.Provider>
  )
}