import React, {useState, useReducer } from 'react'

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

function userReducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username
    case 'LOGOUT':
      return ''
    default:
      throw new Error()
  }
}

function postsReducer (state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author
      }
      return [ newPost, ...state ]
    default: throw new Error()
  }
}

export default function App () {

  const [ user, dispatchUser ] = useReducer(userReducer, '')
  const [ posts, dispatchPosts ] = useReducer(postsReducer, defaultPosts)

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatchUser}/>
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatchPosts} />}
      <br/>
      <hr/>
      <PostList posts={posts} />
    </div>
  )
}