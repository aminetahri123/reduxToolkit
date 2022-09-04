import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost ,deletePost,updatePost} from '../redux/feautures/PostsSlice'
const Posts = () => {
    const [title,setTitle]= useState('')
    const [description, setDescription]= useState('')
    const [updatedTitle,setUpdatedTitle]= useState('')
    const [updatedDescription, setUpdatedDescription]= useState('')
    const [isEdit ,setIsEdit] = useState(false)
    const [id, setId] = useState(null)
    const dispatch = useDispatch()
    const listPosts = useSelector((state)=>state.posts.items)
     
  return (
    <div>
        <div className='form'>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} type='text' placeholder='enter post title'/>
            <input onChange={(e)=>setDescription(e.target.value)} value={description} type='text' placeholder='enter post desc'/>
            <button onClick={()=>{dispatch(addPost({id: listPosts.length + 1,title,description}))  
            setTitle('') ;setDescription('')}} disabled= {title.length>0 && description.length>0}>Add Post</button>
        </div>
        <div className='posts'>
            {listPosts.length > 0 ? listPosts.map(post=><div className='post'>
                    <h2>{post.title} </h2>
                    <p>{post.description}</p>
                    <button onClick={()=> {setIsEdit(true) ;setId(post.id)}}>Edit</button>
                    <button type='button' onClick={()=>dispatch(deletePost({id:post.id}))}>Delete</button>
                    <br />
                    {isEdit && id == post.id && (
                        <>
                            <input type = 'text'
                            placeholder = 'update item'
                            onChange={(e)=>setUpdatedTitle(e.target.value)}
                            />
                            <input type = 'text'
                             placeholder = 'update desc'
                             onChange={(e)=>setUpdatedDescription(e.target.value)}/>
                            <button onClick={()=>{
                                dispatch(updatePost({id:post.id,title:updatedTitle,description:updatedDescription}))
                                setUpdatedTitle('')
                                setUpdatedDescription('')
                                setIsEdit(false)
                            }}>update</button>
                        </>
                    )}
                </div>) : 'no posts'
            }
        </div>
    </div>
  )
}

export default Posts