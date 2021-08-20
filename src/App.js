import React, {useState, useReducer, useEffect } from 'react'

import appReducer from './reducers'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

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

  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`
    } else {
      document.title = 'React Hooks Blog'
    }
  }, [user])

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatch}/>
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br/>
      <hr/>
      <PostList posts={posts} />
    </div>
  )
}