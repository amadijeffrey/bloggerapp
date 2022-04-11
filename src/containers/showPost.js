import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getParticularPost from '../actions/action_fetchPost'
import deletePost from '../actions/action_deletePost'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ShowPost = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getParticularPost(id))

    },[])

    const onDeletePostClick = () => {
        dispatch(deletePost(id, () => {
            navigate('/')
         })
        ) 
    }

    const post = useSelector(({ posts }) => {
       return posts[id]
    })

    return (
        <div className='m-4'>
            <Link to='/'>back to Index</Link>
            <button onClick={onDeletePostClick}
                className='btn btn-danger'>Delete post
            </button>
            <h3>{post.title}</h3>
            <h5>Categories:{post.categories}</h5>
            <p>{post.content}</p>

        </div>
    )


}



export default ShowPost
