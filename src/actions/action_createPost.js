import axios from 'axios'

export const CREATE_POST = 'create_post'

const root_url = 'http://localhost:7070/api/posts/new'

export default function createPost(values, callback) {
  const request = axios.post(`${root_url}`, values, {
    headers: { 'content-type': 'application/json' }
  })

    .then(() => {
      callback()
    })
  return {
    type: CREATE_POST,
    payload: request
  }
} 
