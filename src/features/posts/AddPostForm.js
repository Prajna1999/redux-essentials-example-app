import React, {useState} from "react";

import { useDispatch,useSelector } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

export const AddPostForm=()=>{
    const [title, setTitle]=useState('');

    const [content, setContent]=useState('');

    const [userId,setUserId]=useState('');

    const dispatch=useDispatch()

    const onTitleChanged=e=>setTitle(e.target.value);
    const onContentChanged=e1=>setContent(e1.target.value);
    const onAuthorChange=e=>setUserId(e.target.value);

    const onSavePostClicked=()=>{
        if(title && content){
            dispatch(
                postAdded(
                    title,
                    content,
                    userId
                )
            )

            setTitle('')
            setContent('')
        }
    }
    //validation logic.
    const canSave=Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions=users.map(user=>{
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })
    return(
        <section>
            <h2>Add a New Post</h2>

            <form>
                <label htmlFor="postTitle">Post Title:</label>

                <input
                    type="text"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                    <option value="">
                        
                    </option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>

                <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                />

                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}