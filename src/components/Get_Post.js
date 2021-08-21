import React from 'react'
import { useSelector } from 'react-redux'
import { FetchPosts} from '../actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Get_Post = () => {

    const state = useSelector(state => state.fetchedPosts.posts)
    const dispatch = useDispatch()
    useEffect(()=> {
        console.log(state)
    })
    const RenderPosts = () => {
       return (
           state.map(el => <p key={el.id}>{el.body}</p>)
        )
    }
    return (
        <div>
            {
               RenderPosts()
            }
           
            <button onClick= {() => dispatch(FetchPosts())}>Get posts</button>
        </div>
    )
}

export default Get_Post
