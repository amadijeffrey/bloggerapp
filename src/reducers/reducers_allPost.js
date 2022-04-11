import {FETCH_POSTS }from "../actions/action_fetchPosts";
import {FETCH_POST} from "../actions/action_fetchPost";
import {DELETE_POST} from "../actions/action_deletePost";


import _ from 'lodash'

export default function receivedPost(state={},action){
    switch(action.type){
        case FETCH_POSTS: return _.mapKeys(action.payload.data.allBlogs, '_id')
        case FETCH_POST: return {...state, [action.payload.data.foundBlog._id] : action.payload.data.foundBlog}
        case DELETE_POST: return _.omit(state, action.payload)
        default: return state
    }
}