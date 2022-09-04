import { configureStore} from '@reduxjs/toolkit'
import PostsSlice from './feautures/PostsSlice'

export const store = configureStore({
    reducer:{
        posts: PostsSlice
    },
})