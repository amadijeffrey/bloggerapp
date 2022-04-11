import { CLICKED_POST } from "../actions/action_clickedPost"

export default function clickedpost(state = [], action) {
    switch (action.type) {
        case CLICKED_POST: return [ action.payload, ...state]
        default: return state
    }
}
