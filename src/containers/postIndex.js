import React, { Component } from 'react'
import fetchPosts from '../actions/action_fetchPosts';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import clickedAPost from '../actions/action_clickedPost'
import SelectedPostList from './selectedPost'

class PostIndex extends Component {
  constructor(props) {
    super(props)
    this.clickedCheckbox = this.clickedCheckbox.bind(this)
  }
  componentDidMount() {
    this.props.fetchPosts()
  }

  clickedCheckbox(id) {
    this.props.clickedAPost(id)
  }

  renderPosts() {

    return _.map(this.props.posts, (post) => {
      if (!post) {
        return <div>Loading...</div>
      }
      return <li key={post._id} className='list-group-item mx-2' >
        <input onClick={() => this.clickedCheckbox(post._id)} type='checkbox' className='mx-1' />
        <Link to={`/post/${post._id}`}>
          {post.title}
        </Link>
      </li>
    })
  }
  render() {
    return (
      <div className='m-2'>
        <SelectedPostList />
        <h3 className='m-2'>All Posts</h3>
        <Link to='/posts/new' className='btn btn-primary mb-2 mx-2'>New Post</Link>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }

}

function mapStateToProps({ posts }) {
  return { posts }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, clickedAPost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
