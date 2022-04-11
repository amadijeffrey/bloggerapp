import { createSelector} from 'reselect'
import _ from 'lodash'

const postSelector = state => state.posts
const selectedPostSelector = state => state.selectedPostIds


const getPost = (posts, selectedPostIds) => {
 const selectedPost = _.filter(posts, post => {
     return _.includes(selectedPostIds, post._id)
 })
 return selectedPost
}

export default createSelector(
    postSelector,
    selectedPostSelector,
    getPost
)