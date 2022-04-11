import axios from 'axios'

export  const DELETE_POST = 'delete_post'

const root_url = 'http://localhost:7070/api/posts'

export default function deletePost(id, callback){
    const request = axios.delete(`${root_url}/${id}`)
    .then(() => {
      callback()
    })
    return{
      type: DELETE_POST,
      payload: id
    }
  }