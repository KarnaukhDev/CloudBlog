import React from 'react';
import {useParams} from "react-router-dom";
import * as source from '../data/posts.json'

const data = {source};
const posts = data.source.posts;

type QuizParams = {
    id: string;
};
type InitialPost = {
    id: number,
    title: string,
    body: string,
    date: string,
    images: string[],
    preview: string
};
const PostPage = () => {
    const {id} = useParams<keyof QuizParams>() as QuizParams;

    const currentPost: InitialPost = posts.find(p => p.id === parseInt(id, 10)) || {} as InitialPost;

    return (
        <div className='post-page'>
            <div className='post'>
                <p className='post-title'>{currentPost?.title}</p>
                <div>
                    <p className='post-body'>
                        {currentPost?.body}
                    </p>
                </div>
                <div className='images-block'>
                    <div className='images-preview'>
                        {currentPost.images.map((image, imageIndex) => {
                            return (
                                <img src={image} alt="" className='preview-image' key={imageIndex}/>
                            );
                        })}
                    </div>
                    <div className='additional-info'>
                        <p className='post-date'>{currentPost.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
