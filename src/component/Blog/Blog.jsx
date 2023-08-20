/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'



const Blog = (props) => {
    // console.log(props);
    const {blog_img, author_name, publish_date, author_img, tag, blog_title, read_time} = props.blog;
    
    const  markAsRead = props.markAsRead;
    const addToBookCart = props.addToBookCart;

    return (
        <div className='blog'>
            <img className='blog-cover' src={blog_img} alt="" />
            <div className='blog-details'>
                <div className='author-details'>
                    <div className='author-info'>
                        <img src={author_img} alt="" />
                        <div className='author'>
                            <h3>{author_name}</h3>
                            <p>{publish_date}</p>
                        </div>
                    </div>
                    <div>
                        <p className='book-mark'>{read_time} min read <FontAwesomeIcon className='icon' onClick={() => addToBookCart(props.blog)} icon={faBookmark} /></p>
                    </div>
                </div>
                <div className='blog-info'>
                    <h1>{blog_title}</h1>
                    <p>{tag}</p>
                    <button onClick={() => markAsRead(props.blog)}>Mark as read</button>
                </div>
            </div>   
            <hr className='blog-hr' />
        </div>
    );
};

export default Blog;