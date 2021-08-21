import axios from 'axios'

const URL  = 'https://jsonplaceholder.typicode.com/posts'

export const GET_POSTS = (posts) => {
     return {
         type : 'GET_DATA',
         payload : posts
     }
}

export const FetchPosts = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(URL)
            dispatch(GET_POSTS(response.data))
        }
        catch (error) {
            console.log(error)
        }
    }
}