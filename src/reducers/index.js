import {combineReducers} from 'redux'
import allPosts from './reducers_allPost'
import postIdReducer from './reducer_clickedPost'
import {reducer as formReducers} from 'redux-form'

const rootReducers = combineReducers({
    posts : allPosts,
    form: formReducers,
    selectedPostIds: postIdReducer
})

export default rootReducers