import React from "react"
import { connect } from "react-redux"
import selectedPostSelector from '../selectors/selector_selectedPost'

const SelectedPostList = props => {

    return (
        <div>
            <h3 className="m-2">Selected Post</h3>
            <ul className="list-group">
                {
                    props.postList.map(post => {
                        if (!post) {
                            return <div>Loading...</div>
                          }
                        return <li className='list-group-item mx-2' key={post._id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { postList: selectedPostSelector(state) }
}
export default connect(mapStateToProps)(SelectedPostList)