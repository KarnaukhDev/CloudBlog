import React from 'react';
import * as source from '../data/posts.json';

const data = {source};
const posts = data.source.posts;

const PostsPage = () => {
    return (
        <div className='posts-page'>
            {posts.map((post, index) => {
                return (
                    <div className='post' key={index}>
                        <p className='post-title'>{post.title}</p>
                        <p className='post-body'>{post.body}</p>
                        <div className='images-block'>
                            <div className='images-preview'>
                                {post.images.map((image, imageIndex) => {
                                    return (
                                        <img src={image} alt="" className='preview-image'/>
                                    );
                                })}
                            </div>
                            <div className='additional-info'>
                                <p className='post-date'>{post.date}</p>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}

export default PostsPage;
