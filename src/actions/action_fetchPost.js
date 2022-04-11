import axios from 'axios'

export const FETCH_POST = 'fetch_post'

const root_url = 'http://localhost:7070/api/posts'

export default function fetchPost(id){
    const request = axios.get(`${root_url}/${id}`)
      return {
          type: FETCH_POST,
          payload: request
      }
  }