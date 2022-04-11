import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'


const root_url = 'http://localhost:7070/api/posts'

export default function fetchPosts(){
  const request = axios.get(`${root_url}`)
    return {
        type: FETCH_POSTS,
        payload: request
    }
}




