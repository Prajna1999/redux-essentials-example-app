import React from 'react';

import { useSelector } from 'react-redux';

import { PostAuthor } from './PostAuthor';

export const SinglePostPage=({match})=>{
    const {postId}=match.params

    const post=useSelector(state=>
        state.posts.find(post=>post.id===postId))

    if(post===undefined){
        return(
            <section>
                <h2>Page Not Found!</h2>
            </section>
        )
    }

    return(
        <section>
            <article className='post'>
                <h2>{post.title}</h2>
                <p className='post-content'>{post.content}</p>
                <PostAuthor userId={post.user} />
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}