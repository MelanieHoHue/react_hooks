import React, {useState, useReducer } from 'react'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'

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

  const [ user, setUser ] = useState('')
  const [ posts, setPosts ] = useState(defaultPosts)

  function reducer (state, action) {
    switch (action.type) {
      case 'TOOGLE_EXPAND':
        return { ...state, expandPosts: !state.expandPosts}
      case 'CHANGE_FILTER':
        let filter = typeof state.filter === 'object' ? state.filter : {}  
        if (action.all) {
          return {...state, filter: 'all'}
        }
        if (action.fromDate) {
          filter = { ...filter, fromDate: action.fromDate }
        }
        if (action.byAuthor) {
          filter = { ...filter, byAuthor: action.byAuthor }
        }
        return { ...state, filter }
      default:
        throw new Error()
    }
  }
  
  const initialState = { all: true }
  const [ state, dispatch ] = useReducer(reducer, initialState)

  dispatch({ type: 'TOGGLE_EXPAND' })

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} setUser={setUser}/>
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br/>
      <hr/>
      <PostList posts={posts} />
    </div>
  )
}