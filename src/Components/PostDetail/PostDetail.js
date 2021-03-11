import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id} = useParams();
    const [comments,setComments] = useState([]);
    const[postDetail, setPostDetail] = useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    },[])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postID=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    return (
        <div>
            <h1>this is post detail: {id}</h1>
            <h2>ID: <strong>{postDetail.id}</strong> {postDetail.title} </h2>
            <p>Body: {postDetail.body}</p>
            <p>Number of Comments: {comments.length}</p>

            
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetail;