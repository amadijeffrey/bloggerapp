import React, {Component} from 'react'
import { Route, Routes } from 'react-router-dom'
import PostIndex from './containers/postIndex'
import NewPost from './containers/postNew';
import ShowPost from './containers/showPost';



class App extends Component {
render(){
    return(
   <Routes>
      <Route path='/' element={<PostIndex />} />
      <Route path='/posts/new' element={<NewPost />} />
      <Route path='/post/:id' element={<ShowPost />} />

    </Routes>
    )
}
}

export default App