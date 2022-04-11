export const CLICKED_POST = 'click_post'

export default function clickedPost(id){
    console.log('clicked')
    return {
        type: CLICKED_POST,
        payload: id
    }
}