import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/appwriteConfig"
import { Container, PostCard } from '../components'
function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        appwriteService.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className=''>
            {posts.map((post)=>(
                <div className='p-2 w-1/4' key={post.$id}>
                    <PostCard post={post} />
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts