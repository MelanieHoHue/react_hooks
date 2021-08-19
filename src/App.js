import React from 'react'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

const user = 'Melanie'
const posts = [{
  title: 'Post1',
  content: 'bla',
  author: 'me'
}, {
  title: 'Post2',
  content: 'bla',
  author: 'me'
}]

export default function App () {
  return (
    <div style={{ padding: 8 }}>
      <UserBar />
      <br />
      <CreatePost user={user} />
      <br/>
      <hr/>
      <PostList posts={posts} />
    </div>
  )
}